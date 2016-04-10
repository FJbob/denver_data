 curl -XDELETE 'http://localhost:9200/denver_crime/'

 curl -XPUT 'http://localhost:9200/denver_crime' -d @crime_mapping.json --header "Content-Type: application/json"