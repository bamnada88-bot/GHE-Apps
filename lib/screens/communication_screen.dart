import 'package:flutter/material.dart';

class CommunicationScreen extends StatefulWidget {
  @override
  _CommunicationScreenState createState() => _CommunicationScreenState();
}

class _CommunicationScreenState extends State<CommunicationScreen> {
  List<Message> messages = [];
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Communication')), 
      body: Column(
        children: <Widget>[
          Expanded(child: _buildMessageList()),
          _buildMessageInput(),
        ],
      ),
    );
  }

  Widget _buildMessageList() {
    return ListView.builder(
      itemCount: messages.length,
      itemBuilder: (context, index) {
        return _buildMessageItem(messages[index]);
      },
    );
  }

  Widget _buildMessageItem(Message message) {
    return ListTile(
      title: Text(message.sender),
      subtitle: Text(message.text),
      trailing: _buildMessageStatus(message),
    );
  }

  Widget _buildMessageStatus(Message message) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(message.isRead ? 'Read' : 'Sent'),
        if (message.isTyping) 
          CircularProgressIndicator(),
      ],
    );
  }

  Widget _buildMessageInput() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: <Widget>[
          Expanded(
            child: TextField(
              controller: _controller,
              decoration: InputDecoration(
                hintText: 'Type a message',
              ),
            ),
          ),
          IconButton(
            icon: Icon(Icons.send),
            onPressed: _sendMessage,
          )
        ],
      ),
    );
  }

  void _sendMessage() {
    if (_controller.text.isEmpty) return;
    final message = Message(sender: 'Parent', text: _controller.text);
    setState(() {
      messages.add(message);
      _controller.clear();
    });
  }
}

class Message {
  final String sender;
  final String text;
  bool isRead;
  bool isTyping;

  Message({required this.sender, required this.text, this.isRead = false, this.isTyping = false});
}