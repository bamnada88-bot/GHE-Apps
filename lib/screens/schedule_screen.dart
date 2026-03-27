import 'package:flutter/material.dart';

class ScheduleScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Weekly Schedule'),
      ),
      body: ListView(
        padding: EdgeInsets.all(8.0),
        children: [
          _buildScheduleItem('Monday', Colors.red),
          _buildScheduleItem('Tuesday', Colors.blue),
          _buildScheduleItem('Wednesday', Colors.green),
          _buildScheduleItem('Thursday', Colors.orange),
          _buildScheduleItem('Friday', Colors.purple),
          _buildScheduleItem('Saturday', Colors.cyan),
          _buildScheduleItem('Sunday', Colors.brown),
        ],
      ),
    );
  }

  Widget _buildScheduleItem(String day, Color color) {
    return Card(
      color: color,
      margin: EdgeInsets.symmetric(vertical: 4.0),
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Text(
          day,
          style: TextStyle(color: Colors.white, fontSize: 24),
        ),
      ),
    );
  }
}