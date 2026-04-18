import { useState } from 'react';
import { Heart, MessageCircle, Share2, Star, TrendingUp, Award } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Green Heights Administration',
      time: '2 hours ago',
      content: 'We are proud to announce that our students won 1st place in the National Robotics Competition! 🎉🤖',
      likes: 124,
      isLiked: false,
      comments: 15
    },
    {
      id: 2,
      author: 'Mr. John (Science Teacher)',
      time: '5 hours ago',
      content: 'Grade 5 students had an amazing time today doing the volcano eruption experiment in the lab! Pictures linked below. 🌋🔬',
      likes: 89,
      isLiked: true,
      comments: 8
    }
  ]);

  const toggleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const stories = [
    { id: 1, title: 'Field Trip', img: '🏫', viewed: false },
    { id: 2, title: 'Science Fair', img: '🔬', viewed: false },
    { id: 3, title: 'Sports Day', img: '⚽', viewed: true },
    { id: 4, title: 'Art Expo', img: '🎨', viewed: true },
    { id: 5, title: 'Exam Tips', img: '📚', viewed: true },
  ];

  return (
    <div className="dashboard-page">
      
      {/* Stories Section */}
      <section className="stories-container">
        {stories.map(story => (
          <div key={story.id} className="story-item">
            <div className={`story-ring ${story.viewed ? 'viewed' : ''}`}>
              <div className="story-avatar">{story.img}</div>
            </div>
            <span className="story-title">{story.title}</span>
          </div>
        ))}
      </section>

      {/* Quick Stats Grid */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon bg-blue"><TrendingUp size={24}/></div>
          <div className="stat-info">
            <p className="stat-label">Current GPA</p>
            <h3 className="stat-value">3.8 / 4.0</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-green"><Star size={24}/></div>
          <div className="stat-info">
            <p className="stat-label">Attendance</p>
            <h3 className="stat-value">98%</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-gold"><Award size={24}/></div>
          <div className="stat-info">
            <p className="stat-label">Behavior Points</p>
            <h3 className="stat-value">+45</h3>
          </div>
        </div>
      </section>

      {/* School Feed */}
      <section className="feed-section">
        <h2 className="section-title">School Updates</h2>
        
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="post-avatar">{post.author.charAt(0)}</div>
                <div className="post-meta">
                  <h4>{post.author}</h4>
                  <span>{post.time}</span>
                </div>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-actions">
                <button 
                  className={`action-btn ${post.isLiked ? 'liked' : ''}`}
                  onClick={() => toggleLike(post.id)}
                >
                  <Heart size={20} className={post.isLiked ? 'fill-current' : ''} />
                  <span>{post.likes}</span>
                </button>
                <button className="action-btn">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </button>
                <button className="action-btn">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
