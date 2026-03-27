import 'package:flutter/material.dart';

class InsightsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Insights and Recommendations'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[  
            Text('AI-Powered Personalized Recommendations',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            SizedBox(height: 20),
            Text('Learning Suggestions based on Performance:', style: TextStyle(fontSize: 18)),
            // Add dynamic content based on student performance
            // This can be fetched from a backend service
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: 3, // Example count; replace with dynamic data
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text('Suggestion ${index + 1}'),
                  subtitle: Text('Details about suggestion ${index + 1}.'),
                );
              },
            ),
            SizedBox(height: 20),
            Text('Improvement Tips:', style: TextStyle(fontSize: 18)),
            // Add tips here
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: 3, // Example count; replace with dynamic data
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text('Tip ${index + 1}'),
                  subtitle: Text('Details about tip ${index + 1}.'),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}