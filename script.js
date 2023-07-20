// const Str= "abcadeecfb"

const str="abcadeecfb";

const setStr=new Set(str);

for(var alphabet of setStr)
{
    console.log(...setStr);
};

var str1="abcadeecfb";
 const mapon=new Map();

 for(var alphabet1 of str1)
 {
    if(mapon.has(alphabet1))
    {
        mapon.set(alphabet1,mymap.get(alphabet1)+1);
    }
    else
    {
        mapon.set(alphabet1,1);
    }
 }
 console.log(mapon);