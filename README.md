# 魔镜AI助手

一个简单有趣的中文AI聊天助手，提供控制台版本和微信小程序版本。

## 项目简介

魔镜AI是一个基于规则的智能对话助手，可以：
- 友好地问候用户
- 记住用户的名字
- 智能转换对话内容
- 提供有趣的互动体验

## 版本说明

### 1. 微信小程序版本 (推荐) ⭐

微信小程序版本提供了现代化的聊天界面，更加美观易用。

#### 功能特点
- 📱 精美的聊天界面
- 💬 实时消息显示
- 🎨 现代化UI设计
- ⚡ 流畅的用户体验

#### 使用方法

1. **安装微信开发者工具**
   - 下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

2. **导入项目**
   - 打开微信开发者工具
   - 选择"导入项目"
   - 选择本项目目录
   - 填写AppID（测试号）或使用测试模式

3. **运行小程序**
   - 点击"编译"按钮
   - 在模拟器中查看效果
   - 或使用真机调试

#### 项目结构
```
.
├── app.js          # 小程序主逻辑
├── app.json        # 小程序配置文件
├── app.wxss        # 全局样式
├── sitemap.json    # 站点地图配置
└── pages/
    └── index/      # 聊天页面
        ├── index.js    # 页面逻辑
        ├── index.json  # 页面配置
        ├── index.wxml  # 页面结构
        └── index.wxss  # 页面样式
```

### 2. C++控制台版本

原始的C++控制台版本，适合学习和命令行使用。

#### C++ 源代码

```cpp
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
```

#### 编译运行

将上面的C++代码保存到 `main.cpp` 文件，然后编译运行：

```bash
g++ -o mojing main.cpp
./mojing
```

## 对话示例

```
用户: 你好
AI: 您好呀，请问我有什么可以帮助你的吗？

用户: 我是谁
AI: 谁啊，请告诉我您的名字

用户: 小明
AI: 您好，小明！很高兴认识您！

用户: 我是谁
AI: 您是小明啊，我尊敬的殿下！

用户: 你喜欢我吗？
AI: 我喜欢你!
```

## AI逻辑说明

魔镜AI使用简单的规则匹配和文本转换：
1. **问候识别**：识别"你好"等问候语
2. **身份记忆**：记住用户告诉它的名字
3. **对话转换**：智能转换"你"、"我"等人称代词
4. **特殊规则**：处理特定的对话模式

## 技术栈

- **微信小程序**: WXML, WXSS, JavaScript
- **C++版本**: C++11, STL, Regex

## 开发计划

- [x] C++控制台版本
- [x] 微信小程序版本
- [ ] Web网页版
- [ ] 更多智能对话功能
- [ ] 接入真实AI模型

## 许可证

本项目仅供学习交流使用。

## 作者

zyq660

---

**估值一个亿** 💰
