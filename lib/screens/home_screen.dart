import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Student Stories',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          Expanded(
            child: ListView(
              children: <Widget>[
                ListTile(
                  title: Text('Student 1: Story goes here...'),
                ),
                ListTile(
                  title: Text('Student 2: Story goes here...'),
                ),
                // Add more stories as needed
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Quick Stats',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              Column(
                children: <Widget>[
                  Text('Total Students'),
                  Text('100'),  // placeholder for the first stat
                ],
              ),
              Column(
                children: <Widget>[
                  Text('Active Students'),
                  Text('80'),  // placeholder for the second stat
                ],
              ),
            ],
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: ListView(
                children: <Widget>[
                  ListTile(
                    title: Text('Interactive Post 1'),
                    onTap: () {
                      // Handle post interaction
                    },
                  ),
                  ListTile(
                    title: Text('Interactive Post 2'),
                    onTap: () {
                      // Handle post interaction
                    },
                  ),
                  // Add more interactive posts as needed
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}