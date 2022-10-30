#include<bits/stdc++.h>
using namespace std;

string isPalindrome(string s){

    string p=s;

    reverse(p.begin(),p.end());

    if(p==s){
        return "yes";
    }

    else{
        return "no";
    }
}


int main(){
string a="anshul";
cout<<isPalindrome(a);

}