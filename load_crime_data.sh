curl -XDELETE 'http://localhost:9200/denver_crime/'

#curl -XDELETE 'http://localhost:9200/.kibana/'

curl -XPUT 'http://localhost:9200/denver_crime' -d @crime_mapping.json --header "Content-Type: application/json"

../logstash-2.2.2/bin/logstash -f crime-logstash.js -v