input {
#    exec {
#        command => "cat /Users/robertmetthe/projects/test.json"
#        codec => "json"
#        interval => 3600
#    }
    file {
        #path => "/Users/robertmetthe/projects/crime.csv"
        path => "/Users/nreese/projects/denver_data/crime.csv"
        start_position => "beginning"
        sincedb_path => "/dev/null"
        ignore_older => 0
        type => "report"
    }
}

filter {
    csv {
        columns => [
        "INCIDENT_ID",
        "OFFENSE_ID",
        "OFFENSE_CODE",
        "OFFENSE_CODE_EXTENSION",
        "OFFENSE_TYPE_ID",
        "OFFENSE_CATEGORY_ID",
        "FIRST_OCCURRENCE_DATE",
        "LAST_OCCURRENCE_DATE",
        "REPORTED_DATE",
        "INCIDENT_ADDRESS",
        "GEO_X",
        "GEO_Y",
        "GEO_LON",
        "GEO_LAT",
        "DISTRICT_ID",
        "PRECINCT_ID",
        "NEIGHBORHOOD_ID",
        "IS_CRIME",
        "IS_TRAFFIC"
        ]
        separator => ","
    }

    mutate {
      convert => { "GEO_LON" => "float" }
      convert => { "GEO_LAT" => "float" }
      convert => { "IS_CRIME" => "boolean" }
      convert => { "IS_TRAFFIC" => "boolean" }
    }

    mutate {
      add_field => {
        "[location][lat]" => "%{GEO_LAT}"
        "[location][lon]" => "%{GEO_LON}"
      }
      remove_field => ["GEO_LAT", "GEO_LON", "GEO_X", "GEO_Y", "LAST_OCCURRENCE_DATE", 
        "path", "host", "message", "@timestamp", "@version"]
    }

    ruby {
      code => "
        if (event.get('IS_CRIME'))
          event.set('report_type', 'crime')
        else
          event.set('report_type', 'traffic')
        end
        if (event.get('FIRST_OCCURRENCE_DATE') != nil)
          iso8601 = event.get('FIRST_OCCURRENCE_DATE')
          iso8601[10] = 'T'
          iso8601 = iso8601 + '.000'
          event.set('FIRST_OCCURRENCE_DATE', iso8601)

          hours = Integer(iso8601[11..12], 10)
          mins = Integer(iso8601[14..15], 10)
          secs = Integer(iso8601[17..18], 10)
          event.set('secsOfDay', (hours * 3600) + (mins * 60) + secs)
        end

        if (event.get('REPORTED_DATE') != nil)
          iso8601 = event.get('REPORTED_DATE')
          iso8601[10] = 'T'
          iso8601 = iso8601 + '.000'
          event.set('REPORTED_DATE', iso8601)
        end
       "
    }
}

output {
    #stdout {
    #    codec => rubydebug
    #}
    elasticsearch {
        #http://localhost:9200/_cat/indices
        #http://localhost:9200/denver_crime/_mapping?pretty=true
        #http://localhost:9200/denver_crime/_search?pretty=true
        index => "denver_crime"
    }
}
