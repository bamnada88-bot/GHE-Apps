// behavior_screen.dart

import 'package:flutter/material.dart';

class BehaviorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Behavior Screen')), 
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[ 
            Text('Positive Points History:', style: TextStyle(fontWeight: FontWeight.bold)),
            // Past positive behavior records can go here
 
            Text('\n### Recent Positive Points: \n  1. Helped a friend with their homework.\n  2. Volunteered at the community center.\n\nPositive behaviors boost morale and team spirit!\n'),
            SizedBox(height: 16),
            Text('Negative Points History:', style: TextStyle(fontWeight: FontWeight.bold)),
            // Past negative behavior records can go here

            Text('\n### Recent Negative Points: \n  1. Missed an important deadline.\n  2. Had a conflict with team members due to miscommunication.\n\nIt's important to learn from these experiences!\n'),
          ],
        ),
      ),
    );
  }
}