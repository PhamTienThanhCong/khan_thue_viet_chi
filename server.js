const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for now to allow inline styles
}));

// Compression middleware
app.use(compression());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRoute = require('./routes/index');

// Routes
app.use('/', indexRoute);

// 404 handler
app.use((req, res, next) => {
  res.status(404).render('404', { 
    title: 'Page Not Found - Việt Chỉ',
    message: 'Trang không tìm thấy'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Server Error - Việt Chỉ',
    message: 'Có lỗi xảy ra trên server'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📁 Static files served from: ${path.join(__dirname, 'public')}`);
  console.log(`🎨 Views directory: ${path.join(__dirname, 'views')}`);
});

module.exports = app;