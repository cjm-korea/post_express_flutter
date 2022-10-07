import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: '화장지 실시간 확인앱'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String dropdownValue = '1층';
  final List<String> dropdownBtnList = ['1층', '2층', '3층', '4층', '5층'];
  final List listviewItem = [
    "1번칸",
    "2번칸",
    "3번칸",
    "4번칸",
    "5번칸",
    "6번칸",
    "7번칸",
    "5번칸",
  ];

  @override
  Widget build(BuildContext context) {
    SvgPicture.asset(
      'assets/circle-solid.svg',
      color: Colors.red,
      width: 40,
      height: 40,
    );

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: <Widget>[
          Container(
            margin: const EdgeInsets.only(right: 30),
            child: DropdownButton(
                value: dropdownValue,
                icon: const Icon(Icons.keyboard_arrow_down),
                items: dropdownBtnList.map((String items) {
                  return DropdownMenuItem(
                    value: items,
                    child: Text(items),
                  );
                }).toList(),
                onChanged: (String? newValue) {
                  setState(() {
                    dropdownValue = newValue!;
                  });
                }),
          ),
        ],
      ),
      body: Row(
        children: <Widget>[
          ListView.builder(
              itemCount: listviewItem.length,
              itemBuilder: (BuildContext context, int index) {
                return Container(
                  decoration: const BoxDecoration(
                    border: Border(
                      bottom: BorderSide(
                        width: 1,
                        color: Colors.grey,
                      ),
                    ),
                  ),
                  margin: const EdgeInsets.all(25),
                  height: 50,
                  child: Text(
                    listviewItem[index],
                    style: const TextStyle(fontSize: 15),
                  ),
                  // SvgPicture.asset(
                  //   'assets/circle-solid.svg',
                  //   width: 40,
                  //   height: 40,
                  //   color: Colors.red,
                  // ),
                );
              }),
        ],

        // children: <Widget>[
        // Container(
        //   children:
        //   ),
        // ],
      ),
    );
  }
}
