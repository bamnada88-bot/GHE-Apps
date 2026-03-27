import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Profile'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            _buildProfileHeader(),
            _buildQuickStats(),
            _buildMenuItems(),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileHeader() {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Row(
        children: <Widget>[
          CircleAvatar(
            radius: 40,
            backgroundImage: NetworkImage('https://example.com/user_profile_image.jpg'),
          ),
          SizedBox(width: 16.0),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text('User Name', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                Text('@username', style: TextStyle(color: Colors.grey)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickStats() {
    return Card(
      margin: EdgeInsets.all(16.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            Column(
              children: <Widget>[
                Text('Posts', style: TextStyle(fontWeight: FontWeight.bold)),
                Text('120'),
              ],
            ),
            Column(
              children: <Widget>[
                Text('Followers', style: TextStyle(fontWeight: FontWeight.bold)),
                Text('340'),
              ],
            ),
            Column(
              children: <Widget>[
                Text('Following', style: TextStyle(fontWeight: FontWeight.bold)),
                Text('180'),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMenuItems() {
    return Column(
      children: <Widget>[
        ListTile(
          title: Text('Edit Profile'),
          leading: Icon(Icons.edit),
          onTap: () {
            // Handle edit profile action
          },
        ),
        ListTile(
          title: Text('Settings'),
          leading: Icon(Icons.settings),
          onTap: () {
            // Handle settings action
          },
        ),
        ListTile(
          title: Text('Logout'),
          leading: Icon(Icons.logout),
          onTap: () {
            // Handle logout action
          },
        ),
      ],
    );
  }
}