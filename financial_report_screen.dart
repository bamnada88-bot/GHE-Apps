import 'package:flutter/material.dart';

class FinancialReportScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tuition Fees and Financial Report'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[ 
            Text(
              'Manage Tuition Fees and Financial Reports',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Text(
              '1. View Tuition Fees',
              style: TextStyle(fontSize: 18),
            ),
            Text(
              '2. Generate Financial Report',
              style: TextStyle(fontSize: 18),
            ),
            // Additional functionalities can be added here  
          ],
        ),
      ),
    );
  }
}