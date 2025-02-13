#include<iostream>
#include<algorithm>
#include<iomanip>
#include<math.h>
#include<cmath>
#include<map>
#include<regex>
using namespace std;
int main()
{
	cout << "您好我是人工智能助手魔镜" << endl << endl;
	string str;
	string str1="谁啊，请告诉我您的名字";
	bool p = 0;
	regex a1("吗\\？");
	regex a2("你");
	regex a3("我");
	regex a4("谁");
	regex a5("魔镜魔镜");
	while (true)
	{
		cout << "请输入：";
		getline(cin, str);
	
	if (str.find("你好") != string::npos)
	{
		cout << "AI回答：您好呀，请问我有什么可以帮助你的吗？" << endl << endl;
		continue;

	}
	else if (str.find("我是谁") != string::npos&&p==0)
	{
		cout << "AI回答：您是" << str1<<endl<<endl;
		cin >> str1;
		p = 1;
		continue;
	}
	else if (str.find("我是谁") != string::npos && p == 1)
	{
		cout << "AI回答：您是" << str1 <<"啊，我尊敬的殿下！"<< endl << endl;
		continue;
	}
	str = regex_replace(str,regex("？"),"？");
	str = regex_replace(str,a1,"!");
	str = regex_replace(str,a2,"temp");
	str = regex_replace(str,a3,"你");
	str = regex_replace(str, a4, "你");
	str = regex_replace(str, regex("temp"),"我");
	str = regex_replace(str, regex("魔镜魔镜"), "那肯定");
	cout << "AI回答：" << str << endl << endl;

    }

}
