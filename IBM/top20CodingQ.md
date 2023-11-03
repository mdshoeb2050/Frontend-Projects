# Top 20 IBM Coding Questions

# Write a C++ Program to Change Decimal Number to Binary?

```C++
Solution: 

#include <iostream> 
namespace std; 
int main()  
{  
  int a[10], n, i;    
  cout<<"Enter the number to convert: ";    
  cin>>n;    
  for(i=0; n>0; i++)    
  {    
    a[i]=n%2;    
    n= n/2;  
  }    
  cout<<"Binary of the given number= ";    
  for(i=i-1 ;i>=0 ;i--)    
  {    
    cout<<a[i];    
  }    
}  
```

# Write a C++ Program to generate Fibonacci Triangle. 

```C++
#include<iostream>
using namespace std;  
int main()  
{  
    int a=0,b=1,i,c,n,j;    
    cout<<"Enter the limit: ";   
    cin>>n;    
    for(i=1; i<=n; i++)    
    {    
        a=0;    
        b=1;    
        cout<<b<<"\t";   
        for(j=1; j<i; j++)   
        {    
            c=a+b;    
          cout<<c<<"\t";    
            a=b;    
            b=c;  
        }    
        cout<<"\n";    
    }  
    return 0;  
}  
```



# Given a number x, determine whether the given number is Armstrong Number or not.

```C++
#include <iostream>
using namespace std;
int main() {
		int n = 153;
		int temp = n;
		int p = 0;
		while (n > 0) {
			int rem = n % 10;
			p = (p) + (rem * rem * rem);
			n = n / 10;
		}
		if (temp == p) {
			cout<<("Yes. It is Armstrong No.");
		}
		else {
			cout<<("No. It is not an Armstrong No.");
		}
	return 0;
}
```
Also you can refer to this link for a better understanding of Armstrong number.



# Given a number n, print n-th Fibonacci Number.

```C++
#include <bits/stdc++.h>
using namespace std;
int fib(int n)
{
	if (n <= 1)
		return n;
	return fib(n - 1) + fib(n - 2);
}
int main()
{
	int n = 9;
	cout << fib(n);
	getchar();
	return 0;
}
```


# Write a program to find HCF of two numbers without using recursion.

```C++
#include<stdio.h>
int gcd(int,int);
int main()
{
    int m,n,ans;
    scanf("%d",&m);
    scanf("%d",&n);
    while(m!=n)
    {
        if(m>n)
        {
            m=m-n;
        }
        else
        {
            n=n-m;
        }
    }
    printf("%d",m);
    return 0;
}
```

# Find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them.

```C++
    #include <iostream>
    using namespace std;
    int gcd(int a, int b)
    {
        int result = min(a, b); 
        while (result > 0) {
            if (a % result == 0 && b % result == 0) {
                break;
            }
            result--;
        }
        return result; 
    }
    int main()
    {
        int a = 98, b = 56;
        cout << "GCD of " << a << " and " << b << " is "
            << gcd(a, b);
        return 0;
    }
```



# Program to check if a given year is leap year

```C++
        #include <bits/stdc++.h>
        using namespace std;
        bool checkYear(int year)
        {
            if (year % 400 == 0)
                return true;
            if (year % 100 == 0)
                return false;
            if (year % 4 == 0)
                return true;
            return false;
        }
        int main()
        {
            int year = 2000;
            checkYear(year) ? cout << "Leap Year":
                            cout << "Not a Leap Year";
            return 0;
        }       
```



# Write a program to reverse digits of a number

```C++
#include <bits/stdc++.h>
using namespace std;
int reverseDigits(int num)
{
	int rev_num = 0;
	while (num > 0) {
		rev_num = rev_num * 10 + num % 10;
		num = num / 10;
	}
	return rev_num;
}
int main()
{
	int num = 4562;
	cout << "Reverse of no. is " << reverseDigits(num);
	getchar();
	return 0;
}
For better understanding, refer to this Reverse Number Article.
```



# Program to Check if a Given String is Palindrome

```C++
#include <stdio.h>
#include <string.h>
int main()
{
	char str[] = { "abbba" };
	int l = 0;
	int h = strlen(str) - 1;
	while (h > l) {
		if (str[l++] != str[h--]) {
			printf("%s is not a palindrome\n", str);
			return 0;
		
		}
	}
	printf("%s is a palindrome\n", str);
	return 0;
}
```

# Print all prime numbers less than or equal to N

```C++
#include <bits/stdc++.h>
using namespace std;
bool isPrime(int n)
{
	if (n <= 1)
		return false;
	for (int i = 2; i < n; i++)
		if (n % i == 0)
			return false;
	return true;
}
void printPrime(int n)
{
	for (int i = 2; i <= n; i++)
		if (isPrime(i))
			cout << i << " ";
}
int main()
{
	int n = 7;
	printPrime(n);
}
```


# Program for Sum of the digits of a given number


```C++
#include <iostream>
using namespace std;
class PrepBytes {
public:
	int getSum(int n)
	{
		int sum;
		for (sum = 0; n > 0; sum += n % 10, n /= 10)
			;
		return sum;
	}
};
int main()
{
	PrepBytes g;
	int n = 687;
	cout << g.getSum(n);
	return 0;
}
```


# Write a program which concatenates two strings in C++.

```C++
        #include <bits/stdc++.h>
        using namespace std;
        int main()
        {
            char init[] = "this is init";
            char add[] = " added now";
            // concatenating the string.
            strcat(init, add);
            cout << init << endl;
        
            return 0;
        }
```


# Program to find LCM of two numbers

```C++
#include <iostream>
using namespace std;
long long gcd(long long int a, long long int b)
{
if (b == 0)
	return a;
return gcd(b, a % b);
}
long long lcm(int a, int b)
{
	return (a / gcd(a, b)) * b;
}
int main()
{
	int a = 15, b = 20;
	cout <<"LCM of " << a << " and "
		<< b << " is " << lcm(a, b);
	return 0;
}
```    


# How to swap two numbers without using a temporary variable?


```C++
#include <bits/stdc++.h>
using namespace std;
int main()
{
	int x = 10, y = 5;
	// Code to swap 'x' and 'y'
	x = x + y; // x now becomes 15
	y = x - y; // y becomes 10
	x = x - y; // x becomes 5
	cout << "After Swapping: x =" << x << ", y=" << y;
}
```



# Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is a palindrome, but 1451 is not a palindrome.


```C++
#include <iostream>
using namespace std;
int oneDigit(int num)
{
	return (num >= 0 && num < 10);
}
bool isPalUtil(int num, int* dupNum)
{	
	if (oneDigit(num))
		return (num == (*dupNum) % 10);
	if (!isPalUtil(num / 10, dupNum))
		return false;
	*dupNum /= 10;
	return (num % 10 == (*dupNum) % 10);
}
int isPal(int num)
{
	if (num < 0)
		num = -num;
	int* dupNum = new int(num);
	return isPalUtil(num, dupNum);
}
int main()
{
	int n = 12321;
	isPal(n) ? cout <<"Yes\n": cout <<"No" << endl;
	n = 12;
	isPal(n) ? cout <<"Yes\n": cout <<"No" << endl;
	n = 88;
	isPal(n) ? cout <<"Yes\n": cout <<"No" << endl;
	n = 8999;
	isPal(n) ? cout <<"Yes\n": cout <<"No";
	return 0;
}
```


# Reverse a string in Java


```C++
import java.io.*;
import java.util.Scanner;
class PrepBytes {
	public static void main (String[] args) {	
		String str= "PrepBytes", nstr="";
		char ch;	
	System.out.print("Original word: ");
	System.out.println("PrepBytes");	
	for (int i=0; i<str.length(); i++)
	{
		ch= str.charAt(i); 
		nstr= ch+nstr;
	}
	System.out.println("Reversed word: "+ nstr);
	}
}
```


# C program to Find the Largest Number Among Three Numbers 

```C++
#include <stdio.h>
int main()
{
	int A, B, C;
	printf("Enter the numbers A, B and C: ");
	scanf("%d %d %d", &A, &B, &C);
	if (A >= B && A >= C)
		printf("%d is the largest number.", A);
	if (B >= A && B >= C)
		printf("%d is the largest number.", B);
	if (C >= A && C >= B)
		printf("%d is the largest number.", C);
	return 0;
}
```


# Compute average of two numbers without overflow 


```C++
        #include <bits/stdc++.h>
        using namespace std;
        int compute_average(int a, int b)
        {
            return (a + b) / 2;
        } 
        int main()
        {
            int a = INT_MAX, b = INT_MAX;
            cout << "Actual average : " << INT_MAX << endl;
            cout << "Computed average : " << compute_average(a, b);
            return 0;
        }
```


# Check if a given number is Prime Number or not.


```C++
        #include <bits/stdc++.h>
        using namespace std;  
        bool isPrime(int n)
        {
            if (n <= 1)
                return false;
        
            for (int i = 2; i <= sqrt(n); i++)
                if (n % i == 0)
                    return false;
        
            return true;
        }
        int main()
        {
            isPrime(11) ? cout << " true\n" : cout << " false\n";
            return 0;
        }
```



# C++ Program to generate Fibonacci Triangle

```C++
#include<iostream>
        using namespace std;  
        int main()  
        {  
            int a=0,b=1,i,c,n,j;    
            cout<<"Enter the limit: ";   
            cin>>n;    
            for(i=1; i<=n; i++)    
            {    
                a=0;    
                b=1;    
                cout<<b<<"\t";   
                for(j=1; j<i; j++)   
                {    
                    c=a+b;    
                  cout<<c<<"\t";    
                    a=b;    
                    b=c;  
                }    
                cout<<"\n";    
            }  
            return 0;  
        }  
```