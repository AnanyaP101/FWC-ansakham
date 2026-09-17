if [ $# -eq 0 ]; then #ถ้าจำนวน argument = 0
    echo "No arguments supplied"
else
    echo "$1" #argument 1
    if [ $# -ge 2 ]; then 
        echo "$2"
    fi
    if [ $# -ge 3 ]; then
        echo "$3"
    fi
fi