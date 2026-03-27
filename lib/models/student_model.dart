import 'package:flutter/foundation.dart';

class Student {
  String id;
  String name;
  int attendance;
  List<double> grades;
  List<String> behaviorRecords;

  Student({
    required this.id,
    required this.name,
    this.attendance = 0,
    List<double>? grades,
    List<String>? behaviorRecords,
  })  : grades = grades ?? [],
        behaviorRecords = behaviorRecords ?? [];

  // Method to add attendance
  void addAttendance() {
    attendance++;
  }

  // Method to add a grade
  void addGrade(double grade) {
    grades.add(grade);
  }

  // Method to add a behavior record
  void addBehaviorRecord(String record) {
    behaviorRecords.add(record);
  }

  // Method to calculate average grade
  double getAverageGrade() {
    if (grades.isEmpty) return 0.0;
    return grades.reduce((a, b) => a + b) / grades.length;
  }
}