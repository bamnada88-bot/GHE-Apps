import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

class CalendarScreen extends StatefulWidget {
  @override
  _CalendarScreenState createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {
  CalendarController? _controller;
  Map<DateTime, List<dynamic>> _events;
  List<dynamic> _selectedEvents;

  @override
  void initState() {
    super.initState();
    _controller = CalendarController();
    _events = {};
    _selectedEvents = [];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Attendance Calendar')), 
      body: Column(
        children: <Widget>[ 
          TableCalendar(
            calendarController: _controller,
            events: _events,
            onDaySelected: (date, events, _) {
              setState(() {
                _selectedEvents = events;
              });
            },
            calendarStyle: CalendarStyle(
              selectedColor: Colors.blue,
              todayColor: Colors.orange,
              markersColor: Colors.brown,
              outsideDaysVisible: false,
            ),
          ),
          ..._selectedEvents.map((event) => ListTile(title: Text(event.toString()))),
        ],
      ),
    );
  }
}

void main() => runApp(MaterialApp(home: CalendarScreen()));
