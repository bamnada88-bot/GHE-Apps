import 'package:flutter/material.dart';

class GradesScreen extends StatelessWidget {
  final Map<String, Map<String, double>> grades;
  final double overallGPA;

  GradesScreen({required this.grades, required this.overallGPA});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Grades Overview'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Overall GPA: \$overallGPA',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: grades.keys.length,
                itemBuilder: (context, index) {
                  String semester = grades.keys.elementAt(index);
                  return Card(
                    margin: EdgeInsets.symmetric(vertical: 8.0),
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            semester,
                            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                          ),
                          ...grades[semester]!.keys.map((subject) {
                            return Text(
                              '	- \$subject: \${grades[semester]![subject]}',
                              style: TextStyle(fontSize: 16),
                            );
                          }).toList(),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}