// achievements_screen.dart

import 'package:flutter/material.dart';

class AchievementsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Achievements'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[ 
            Text(
              'Gamification and Achievement Badges for Students',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            Icon(Icons.star, size: 100, color: Colors.amber),
            SizedBox(height: 20),
            Text(
              'You have earned an achievement badge!',
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}