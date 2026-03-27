import 'package:flutter/material.dart';

class NotificationsScreen extends StatefulWidget {
  @override
  _NotificationsScreenState createState() => _NotificationsScreenState();
}

class _NotificationsScreenState extends State<NotificationsScreen> {
  int unreadCount = 0;
  List<String> notifications = [];

  @override
  void initState() {
    super.initState();
    // Initialize the notification system here
    _loadNotifications();
    _startListeningForNotifications();
  }

  void _loadNotifications() {
    // Load notifications from your backend or local storage
    notifications = [
      'New message from Alice',
      'Your file has been uploaded',
      'Reminder: Meeting at 10 AM',
    ];
    unreadCount = notifications.length; // Update unread count
    setState(() {});
  }

  void _startListeningForNotifications() {
    // Configure real-time notifications using WebSocket or similar
    // Simulating incoming notifications for the demo
    Future.delayed(Duration(seconds: 5), () {
      _addNotification('New comment on your post');
    });
  }

  void _addNotification(String notification) {
    notifications.insert(0, notification); // Add to the top
    unreadCount++; // Increment unread count
    setState(() {});
  }

  void _markAllAsRead() {
    unreadCount = 0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Notifications'),
        actions: [
          IconButton(
            icon: Icon(Icons.mark_chat_read),
            onPressed: _markAllAsRead,
          )
        ],
      ),
      body: ListView.builder(
        itemCount: notifications.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(notifications[index]),
            trailing: unreadCount > 0
                ? CircleAvatar(
                    backgroundColor: Colors.red,
                    child: Text(
                      unreadCount.toString(),
                      style: TextStyle(color: Colors.white),
                    ),
                  )
                : null,
          );
        },
      ),
    );
  }
}