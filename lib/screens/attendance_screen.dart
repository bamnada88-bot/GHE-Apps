import 'package:flutter/material.dart';

class AttendanceScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Attendance Statistics'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text('Attendance Statistics', style: TextStyle(fontSize: 24)),
            SizedBox(height: 20),
            AttendanceProgressBar(subject: 'Mathematics', attendancePercentage: 75),
            AttendanceProgressBar(subject: 'Science', attendancePercentage: 85),
            AttendanceProgressBar(subject: 'History', attendancePercentage: 90),
            AttendanceProgressBar(subject: 'English', attendancePercentage: 80),
          ],
        ),
      ),
    );
  }
}

class AttendanceProgressBar extends StatelessWidget {
  final String subject;
  final double attendancePercentage;

  AttendanceProgressBar({required this.subject, required this.attendancePercentage});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(subject, style: TextStyle(fontSize: 18)),
        SizedBox(height: 5),
        LinearProgressIndicator(
          value: attendancePercentage / 100,
          minHeight: 25,
          backgroundColor: Colors.grey[300],
          color: Colors.blue,
        ),
        SizedBox(height: 20),
      ],
    );
  }
}