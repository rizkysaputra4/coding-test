const CharSequence = (n = 6) => {
    var model = ['*', '#', '%'];
    var i = 0;
    var output = [];
    for (i = 0; i < n; i++) {
        res = i % 3
        output += model[res]
        console.log(output)
    }
}

CharSequence()

data = [
    {
        field1: "row1",
        field2: 2,
        field3: "S"
    },
    {
        field1: "row2",
        field2: 2,
        field3: "A"
    },
    {
        field1: "row3",
        field2: 1,
        field3: "S"
    },
    {
        field1: "row4",
        field2: 3,
        field3: "S"
    },
    {
        field1: "row5",
        field2: 1,
        field3: "A"
    },
    {
        field1: "row6",
        field2: 4,
        field3: "A"
    },
    {
        field1: "row7",
        field2: 5,
        field3: "S"
    },
    {
        field1: "row8",
        field2: 5,
        field3: "A"
    }
]

function compare( a, b ) {
    if ( a.field2 < b.field2 ){
      return -1;
    }
    if ( a.field2 > b.field2 ){
      return 1;
    }
    return 0;
  }

data.sort(compare)
function AssociateArray(input = data) {
    var output
    for (var i = 0; i < input.length - 1; i++) {
        if ( data[i].field2 === data[i + 1].field2) {
            if (data[i].field3 == "A") {
                output = [data[i+1].field1, data[i].field1]
            } else {
                output = [data[i].field1, data[i+1].field1]
            }
        } else {

        }
     
    }
  

}

AssociateArray()
data = [[1, 'https://id.bitdegree.org'], 
        [2, 'https://finance.detik.com'],
        [3, 'https://telkom.co.id'], 
        [4, 'https://corona.jakarta.go.id']];
        
const getSubDomain = (input = data) => {
    input.map(el => {
        res = el[1].replace(/\.com.*|\.org.*|\.co.*|\.go.*/g, '');
        res = res.replace(/https:\/\//g, '');
        haveSubDomain = res.match(/\..*/g);
        if(haveSubDomain) {
            subDomain = res.replace(/\..*/g, '');
            el.push(subDomain);
        } else {
            el.push('null');
        }
    });
    return input;
};

console.log(getSubDomain());

const palindromeComb = (input = 76116557)=> {
    var input = String(input).split(" ").join("").split("");
    var firstHalf = [], halfRest = [];
    var inputLen = input.length;
    var i = 0;
    var uniqueElement = 0;
    while (i<= inputLen) {
        i++;
        getChar = input[i];
        input.splice(i, 1);
        if (input.includes(getChar)) {
            firstHalf += getChar;
            halfRest += getChar;
            index = input.indexOf(getChar);
            input.splice(index, 1);
            i = 0;
        } else {
            uniqueElement += 1;
            input.push(getChar);
        }
        
        if (uniqueElement > 1) {
            return 'Cannot find possible series to construct palindrome order';
            
        }
        
        if (input.length <= 1) {
            midVal = input[0];
            if (input.length === 0) {
                midVal = "";
            }
            palindrome = firstHalf + midVal +halfRest.split("").reverse().join("");
            result = palindrome
            return result
        }
    }
}

console.log(palindromeComb())