if [ -z $1 ]; then 
  echo "file containing POST body not provided, Usage: $0 <filename>"
  exit 0 
fi

if [ ! -f $1 ]; then
    echo "$1 not found!"
    exit 0
fi

echo "POSTing contents of $1"
curl -i -v -XGET 'http://localhost:9200/denver_crime/report/_search?pretty=true' -d @$1 --header "Content-Type: application/json"
