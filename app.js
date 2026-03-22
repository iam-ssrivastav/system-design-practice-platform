// ---- Feature Toggles ----
function toggleMobileMenu() {
  const menu = document.getElementById('navLinks');
  if (menu) menu.classList.toggle('open');
}

// ---- Floating Background Icons (Login Page) ----
function spawnFloatingIcons() {
  const container = document.getElementById('floatingIcons');
  if (!container) return;
  
  const icons = [
    { emoji: '⚖️', label: 'Load Balancer' },
    { emoji: '🗄️', label: 'Database' },
    { emoji: '⚡', label: 'Cache' },
    { emoji: '📨', label: 'Kafka' },
    { emoji: '🌐', label: 'CDN' },
    { emoji: '🛡️', label: 'API Gateway' },
    { emoji: '🔍', label: 'Search' },
    { emoji: '💾', label: 'Storage' },
    { emoji: '🖥️', label: 'Server' },
    { emoji: '📡', label: 'DNS' },
    { emoji: '🔗', label: 'Microservice' },
    { emoji: '🧩', label: 'Queue' },
    { emoji: '📊', label: 'Monitoring' },
    { emoji: '🔒', label: 'Auth' },
    { emoji: '☁️', label: 'Cloud' },
    { emoji: '🏗️', label: 'Architect' },
    { emoji: '📋', label: 'Config' },
    { emoji: '🔄', label: 'Sync' }
  ];
  
  icons.forEach((icon, i) => {
    const el = document.createElement('div');
    el.className = 'floating-icon';
    el.textContent = icon.emoji;
    el.title = icon.label;
    
    // Randomized placement across the full viewport
    el.style.left = `${Math.random() * 90 + 2}%`;
    el.style.top = `${Math.random() * 85 + 5}%`;
    
    // Each icon gets a unique animation speed for organic motion
    const driftDur = 4 + Math.random() * 6;  // 4-10s
    const horizDur = 5 + Math.random() * 8;  // 5-13s
    el.style.setProperty('--drift-duration', `${driftDur}s`);
    el.style.setProperty('--horizontal-duration', `${horizDur}s`);
    
    // Stagger animation start so they don't sync
    el.style.animationDelay = `${-(Math.random() * 8)}s`;
    
    // Vary sizes slightly
    el.style.fontSize = `${24 + Math.random() * 20}px`;
    el.style.opacity = `${0.06 + Math.random() * 0.1}`;

    container.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', spawnFloatingIcons);

// ---- Problem Data ----
const PROBLEMS = [
  { id:1, title:"URL Shortener", difficulty:"easy", category:"url-shortener", isPremium:false,
    desc:"Design a URL shortening service like TinyURL that converts long URLs to short ones.",
    tags:["Hashing","Database","Cache","API Design"],
    requirements:[
      {text:"Client sends requests to the system",needs:["client"]},
      {text:"Load balancer distributes traffic",needs:["load-balancer"]},
      {text:"Application server handles business logic",needs:["app-server","web-server"]},
      {text:"Database stores URL mappings",needs:["sql-db","nosql-db"]},
      {text:"Cache for hot URLs (optional bonus)",needs:["cache"],optional:true}
    ],
    hint:"Think about how to generate unique short codes and handle high read traffic."
  },
  { id:2, title:"Chat Messaging System", difficulty:"medium", category:"messaging", isPremium:true,
    desc:"Design a real-time chat application like WhatsApp supporting 1-on-1 and group messaging.",
    tags:["WebSocket","Queue","Database","Notification"],
    requirements:[
      {text:"Client connects to the system",needs:["client"]},
      {text:"Load balancer for connection distribution",needs:["load-balancer"]},
      {text:"WebSocket server for real-time messaging",needs:["web-server"]},
      {text:"Message queue for async processing",needs:["message-queue"]},
      {text:"Database for message persistence",needs:["sql-db","nosql-db"]},
      {text:"Notification service for offline users",needs:["notification"],optional:true},
      {text:"Cache for recent conversations",needs:["cache"],optional:true}
    ],
    hint:"Consider how to handle message ordering, delivery receipts, and offline users."
  },
  { id:3, title:"Instagram / Photo Sharing", difficulty:"medium", category:"storage", isPremium:true,
    desc:"Design a photo sharing platform with feeds, likes, comments, and followers.",
    tags:["CDN","Object Storage","Feed","Cache"],
    requirements:[
      {text:"Client interface",needs:["client"]},
      {text:"CDN for serving images",needs:["cdn"]},
      {text:"Load balancer",needs:["load-balancer"]},
      {text:"Application servers",needs:["app-server","web-server"]},
      {text:"Object storage for images",needs:["object-storage"]},
      {text:"Database for metadata",needs:["sql-db","nosql-db"]},
      {text:"Cache for feed generation",needs:["cache"],optional:true},
      {text:"Message queue for async tasks",needs:["message-queue"],optional:true}
    ],
    hint:"Focus on how to efficiently store/serve images and generate user feeds at scale."
  },
  { id:4, title:"Twitter / Social Feed", difficulty:"hard", category:"messaging", isPremium:true,
    desc:"Design a social media platform with tweets, timeline, trending topics, and search.",
    tags:["Fan-out","Cache","Search","Queue"],
    requirements:[
      {text:"Client",needs:["client"]},
      {text:"CDN for static assets",needs:["cdn"]},
      {text:"Load balancer",needs:["load-balancer"]},
      {text:"API Gateway for rate limiting",needs:["api-gateway"]},
      {text:"Application servers",needs:["app-server","web-server"]},
      {text:"Database for tweets/users",needs:["sql-db","nosql-db"]},
      {text:"Cache for timelines",needs:["cache"]},
      {text:"Message queue for fan-out",needs:["message-queue"]},
      {text:"Search engine for tweets",needs:["search"],optional:true}
    ],
    hint:"Consider fan-out-on-write vs fan-out-on-read for timeline generation."
  },
  { id:5, title:"Netflix / Video Streaming", difficulty:"hard", category:"streaming", isPremium:true,
    desc:"Design a video streaming platform handling millions of concurrent viewers.",
    tags:["CDN","Transcoding","Storage","Adaptive Streaming"],
    requirements:[
      {text:"Client",needs:["client"]},
      {text:"CDN for video delivery",needs:["cdn"]},
      {text:"DNS for routing",needs:["dns"]},
      {text:"Load balancer",needs:["load-balancer"]},
      {text:"Application servers",needs:["app-server","web-server"]},
      {text:"Object storage for videos",needs:["object-storage"]},
      {text:"Database for metadata",needs:["sql-db","nosql-db"]},
      {text:"Message queue for transcoding",needs:["message-queue"]},
      {text:"Cache for recommendations",needs:["cache"],optional:true}
    ],
    hint:"Think about video transcoding pipeline, adaptive bitrate, and CDN edge caching."
  },
  { id:6, title:"Uber / Ride Sharing", difficulty:"hard", category:"messaging", isPremium:true,
    desc:"Design a ride-sharing service matching drivers with riders in real-time.",
    tags:["Geospatial","Real-time","Queue","Matching"],
    requirements:[
      {text:"Client (rider & driver)",needs:["client"]},
      {text:"Load balancer",needs:["load-balancer"]},
      {text:"API Gateway",needs:["api-gateway"]},
      {text:"Matching microservice",needs:["microservice"]},
      {text:"Application servers",needs:["app-server","web-server"]},
      {text:"Database for trips/users",needs:["sql-db","nosql-db"]},
      {text:"Cache for driver locations",needs:["cache"]},
      {text:"Message queue for notifications",needs:["message-queue"]},
      {text:"Notification service",needs:["notification"],optional:true}
    ],
    hint:"Focus on real-time location tracking, efficient proximity matching, and surge pricing."
  },
  { id:7, title:"Distributed Rate Limiter", difficulty:"hard", category:"url-shortener", isPremium:true,
    desc:"Design a distributed rate limiter to throttle API requests (e.g., token bucket algorithm).",
    tags:["API Gateway","Redis","Concurrency","Throttling"],
    requirements:[
      {text:"Client traffic",needs:["client"]},
      {text:"API Gateway/Load Balancer",needs:["api-gateway","load-balancer"]},
      {text:"Rate Limiter service",needs:["rate-limiter"]},
      {text:"Distributed Cache (Redis) for token storage",needs:["cache"]},
      {text:"Backend Application servers",needs:["app-server"]}
    ],
    hint:"Consider race conditions when multiple gateways read/write to the cache simultaneously."
  },
  { id:8, title:"Web Crawler / Search Engine", difficulty:"hard", category:"storage", isPremium:true,
    desc:"Design a high-throughput distributed web crawler that downloads and indexes billions of pages.",
    tags:["Queue","Worker","Storage","Directed Graph"],
    requirements:[
      {text:"Seed URLs / URL Frontier (Message Queue)",needs:["message-queue"]},
      {text:"HTML Download Workers",needs:["app-server"]},
      {text:"DNS Resolver",needs:["dns"]},
      {text:"Object Storage for raw HTML",needs:["object-storage"]},
      {text:"Content Extractor / Indexer",needs:["microservice"]},
      {text:"Search Index DB",needs:["search"]}
    ],
    hint:"Focus on BFS traversal, polite crawling delays, and canonical deduplication."
  },
  { id:9, title:"Distributed Key-Value Store", difficulty:"medium", category:"storage", isPremium:true,
    desc:"Design a highly available distributed cache/KV store (like Memcached or Redis).",
    tags:["Consistent Hashing","Replication","Gossip","CAP Theorem"],
    requirements:[
      {text:"Client library",needs:["client"]},
      {text:"Service Registry / Zookeeper for node configs",needs:["zookeeper"]},
      {text:"Multiple Cache Nodes filling a hash ring",needs:["cache","cache","cache"]},
      {text:"Backup Storage (Optional append-only file)",needs:["object-storage"],optional:true}
    ],
    hint:"Think about Consistent Hashing for data partitioning and resolving split-brain conflicts."
  },
  { id:10, title:"Yelp / Proximity Service", difficulty:"medium", category:"messaging", isPremium:true,
    desc:"Design a Location-Based Service (LBS) to find nearby restaurants instantly.",
    tags:["QuadTree","Geospatial","Read-Heavy","Cache"],
    requirements:[
      {text:"Mobile Client",needs:["client"]},
      {text:"Load Balancer",needs:["load-balancer"]},
      {text:"API Gateway",needs:["api-gateway"]},
      {text:"Location Compute Service",needs:["app-server"]},
      {text:"Read-Replica SQL DB (Locations)",needs:["sql-db"]},
      {text:"In-Memory Cache for hot zones",needs:["cache"]}
    ],
    hint:"Use a QuadTree or Geohash partitioning index to optimize multi-dimensional spatial queries."
  },
  { id:11, title:"Amazon / Flipkart (E-commerce)", difficulty:"hard", category:"storage", isPremium:true,
    desc:"Design a distributed E-commerce platform handling massive catalog read traffic and high-concurrency checkout.",
    tags:["CQRS","Saga Pattern","Microservices","Distributed Transactions"],
    requirements:[
      {text:"Client (Web & Mobile App)",needs:["client"]},
      {text:"CDN for Product Images",needs:["cdn"]},
      {text:"API Gateway / Edge Router",needs:["api-gateway"]},
      {text:"Catalog Read Service (CQRS)",needs:["microservice"]},
      {text:"Order/Checkout Service (Saga)",needs:["microservice"]},
      {text:"Redis Cache (Hot Items & Cart)",needs:["cache"]},
      {text:"Message Queue (Payment / Inventory Event Sync)",needs:["message-queue"]},
      {text:"SQL DB for Orders (ACID compliance)",needs:["sql-db"]},
      {text:"Search Engine (Elasticsearch for Catalog)",needs:["search"],optional:true}
    ],
    hint:"Use CQRS to split heavy product reads from order writes, and rely on the Saga Pattern via message queues for handling inventory/payment transactions across microservices."
  },
  { id:12, title:"Ticketmaster / BookMyShow", difficulty:"hard", category:"messaging", isPremium:true,
    desc:"Design a high-concurrency ticket booking system where thousands compete for limited event seats in seconds.",
    tags:["Distributed Locking","Optimistic Concurrency","Queue","Cache"],
    requirements:[
      {text:"Client Portal",needs:["client"]},
      {text:"Load Balancer",needs:["load-balancer"]},
      {text:"Booking & Inventory Service",needs:["app-server"]},
      {text:"Redis Redlock (Distributed Locking)",needs:["cache"]},
      {text:"Waitlist/Holding Queue",needs:["message-queue"]},
      {text:"SQL Database (Strict Serializability)",needs:["sql-db"]}
    ],
    hint:"Locking the seat temporarily (e.g., 5-minute expiry in Redis) avoids double booking. If payment fails, the lock expires and the queue pushes the next user in."
  }
];

// ---- Component Definitions ----
const COMP_DEFS = {
  'client':        {label:'Client',        icon:'👤', color:'#00bbff',  latency:5,   maxLoad:1000},
  'dns':           {label:'DNS',           icon:'🌍', color:'#66bbff',  latency:50,  maxLoad:5000},
  'cdn':           {label:'CDN',           icon:'🌐', color:'#44ddff',  latency:10,  maxLoad:10000},
  'load-balancer': {label:'Load Balancer', icon:'⚖️', color:'#7c6aff', latency:2,   maxLoad:8000},
  'api-gateway':   {label:'API Gateway',   icon:'🚪', color:'#aa77ff',  latency:5,   maxLoad:5000},
  'waf':           {label:'WAF',           icon:'🛡️', color:'#ff5577',  latency:10,  maxLoad:4000},
  'rate-limiter':  {label:'Rate Limiter',  icon:'⏱️', color:'#aa77ff',  latency:2,   maxLoad:10000},
  'web-server':    {label:'Web Server',    icon:'🖥️', color:'#00d4aa', latency:15,  maxLoad:2000},
  'app-server':    {label:'App Server',    icon:'⚙️', color:'#00d4aa', latency:20,  maxLoad:1500},
  'microservice':  {label:'Microservice',  icon:'🔧', color:'#55ddaa',  latency:15,  maxLoad:1500},
  'stream-processing':{label:'Stream Proc',icon:'🌊', color:'#00bbff',  latency:30,  maxLoad:8000},
  'zookeeper':     {label:'Service Reg',   icon:'🗺️', color:'#7c6aff',  latency:5,   maxLoad:5000},
  'sql-db':        {label:'SQL Database',  icon:'🗄️', color:'#ffaa00', latency:30,  maxLoad:800},
  'nosql-db':      {label:'NoSQL DB',      icon:'📦', color:'#ffaa00',  latency:10,  maxLoad:3000},
  'cache':         {label:'Cache',         icon:'⚡', color:'#ff6b9d',  latency:2,   maxLoad:10000},
  'object-storage':{label:'Object Storage',icon:'📁', color:'#88cc44',  latency:50,  maxLoad:5000},
  'search':        {label:'Search Engine', icon:'🔍', color:'#ff5577',  latency:25,  maxLoad:2000},
  'data-warehouse':{label:'Data Warehouse',icon:'🏬', color:'#ffaa00',  latency:300, maxLoad:500},
  'message-queue': {label:'Message Queue', icon:'📬', color:'#ff8844',  latency:5,   maxLoad:10000},
  'notification':  {label:'Notification',  icon:'🔔', color:'#ff8844',  latency:30,  maxLoad:3000},
  'logger':        {label:'Data Logger',   icon:'📟', color:'#aaaaaa',  latency:1,   maxLoad:50000}
};

  // ---- Configuration Definitions ----
const CONFIG_DEFS = {
  'client': [
    { key:'timeout', label:'Client Timeout (ms)', type:'number', min:100, max:10000, default:3000 }
  ],
  'dns': [
    { key:'routing', label:'Routing Policy', type:'select', options:['Simple', 'Latency', 'Geolocation', 'Weighted'], default:'Simple' },
    { key:'ttl', label:'TTL (Seconds)', type:'number', min:60, max:86400, default:300 }
  ],
  'cdn': [
    { key:'cacheTime', label:'Cache Duration (hrs)', type:'number', min:1, max:720, default:24 },
    { key:'compression', label:'Compression', type:'select', options:['None', 'GZIP', 'Brotli'], default:'Brotli' },
    { key:'geo', label:'Geo Distribution', type:'select', options:['Regional', 'Multi-Region', 'Global Edge'], default:'Global Edge' }
  ],
  'load-balancer': [
    { key:'algorithm', label:'Algorithm', type:'select', options:['Round Robin', 'Least Connections', 'IP Hash'], default:'Round Robin' },
    { key:'stickiness', label:'Session Stickiness', type:'toggle', default:false }
  ],
  'api-gateway': [
    { key:'rateLimit', label:'Rate Limit (req/s)', type:'number', min:10, max:10000, default:1000 },
    { key:'auth', label:'Authentication', type:'select', options:['None', 'JWT', 'OAuth 2.0'], default:'JWT' }
  ],
  'waf': [
    { key:'ruleset', label:'Rule Set', type:'select', options:['Basic', 'OWASP Top 10', 'Strict'], default:'OWASP Top 10' },
    { key:'botControl', label:'Bot Control', type:'toggle', default:true }
  ],
  'rate-limiter': [
    { key:'algorithm', label:'Algorithm', type:'select', options:['Token Bucket', 'Leaky Bucket', 'Fixed Window'], default:'Token Bucket' },
    { key:'capacity', label:'Bucket Capacity', type:'number', min:100, max:50000, default:5000 }
  ],
  'web-server': [
    { key:'threads', label:'Max Threads', type:'number', min:10, max:1000, default:200 },
    { key:'keepAlive', label:'Keep-Alive', type:'toggle', default:true },
    { key:'autoScale', label:'Auto-Scaling', type:'toggle', default:false }
  ],
  'app-server': [
    { key:'threads', label:'Max Threads', type:'number', min:10, max:1000, default:200 },
    { key:'timeout', label:'Request Timeout (ms)', type:'number', min:100, max:5000, default:1000 },
    { key:'autoScale', label:'Auto-Scaling', type:'toggle', default:false }
  ],
  'microservice': [
    { key:'instances', label:'Instances Scale', type:'number', min:1, max:20, default:3 },
    { key:'circuitBreaker', label:'Circuit Breaker', type:'toggle', default:true },
    { key:'autoScale', label:'Auto-Scaling', type:'toggle', default:false }
  ],
  'stream-processing': [
    { key:'workers', label:'Worker Nodes', type:'number', min:1, max:50, default:5 },
    { key:'batchSize', label:'Batch Size (ms)', type:'number', min:10, max:5000, default:500 }
  ],
  'zookeeper': [
    { key:'quorum', label:'Quorum Size', type:'number', min:3, max:11, default:3 },
    { key:'heartbeat', label:'Heartbeat (ms)', type:'number', min:100, max:5000, default:1000 }
  ],
  'logger': [
    { key:'logLevel', label:'Export Level', type:'select', options:['INFO', 'DEBUG', 'TRACE (Full Payload)', 'WARN'], default:'TRACE (Full Payload)' }
  ],
  'sql-db': [
    { key:'replication', label:'Replicas', type:'number', min:1, max:10, default:1 },
    { key:'isolation', label:'Isolation Level', type:'select', options:['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'], default:'Read Committed' },
    { key:'connPool', label:'Connection Pool Size', type:'number', min:10, max:5000, default:100 }
  ],
  'nosql-db': [
    { key:'nodes', label:'Cluster Nodes', type:'number', min:1, max:20, default:3 },
    { key:'consistency', label:'Consistency Level', type:'select', options:['Eventual', 'Quorum', 'Strong'], default:'Eventual' },
    { key:'wcu', label:'Write Capacity (WCU)', type:'number', min:100, max:100000, default:5000 }
  ],
  'cache': [
    { key:'hitRate', label:'Cache Hit Rate (%)', type:'number', min:0, max:100, default:85 },
    { key:'eviction', label:'Eviction Policy', type:'select', options:['LRU', 'LFU', 'FIFO'], default:'LRU' }
  ],
  'object-storage': [
    { key:'tier', label:'Storage Tier', type:'select', options:['Standard', 'Infrequent Access', 'Glacier'], default:'Standard' },
    { key:'geoReplication', label:'Multi-Region Replication', type:'toggle', default:false }
  ],
  'data-warehouse': [
    { key:'nodes', label:'Compute Nodes', type:'number', min:1, max:32, default:2 },
    { key:'olap', label:'OLAP Cubes Built', type:'toggle', default:true }
  ],
  'search': [
    { key:'shards', label:'Data Shards', type:'number', min:1, max:50, default:5 },
    { key:'replicas', label:'Index Replicas', type:'number', min:0, max:5, default:1 }
  ],
  'message-queue': [
    { key:'retention', label:'Retention (hrs)', type:'number', min:1, max:168, default:24 },
    { key:'shards', label:'Partitions/Shards', type:'number', min:1, max:100, default:3 },
    { key:'acks', label:'ACK Level', type:'select', options:['0 (None)', '1 (Leader)', 'All (Replicas)'], default:'1 (Leader)' }
  ],
  'notification': [
    { key:'batchSize', label:'Batch Size', type:'number', min:1, max:5000, default:100 },
    { key:'retry', label:'Retry Policy', type:'select', options:['None', 'Linear', 'Exp. Backoff'], default:'Exp. Backoff' }
  ]
};


const PROBLEM_TRACES = {
  1: { // URL Shortener
    'client': (c) => 'POST /create {"url": "https://example.com/very-long-url"}',
    'load-balancer': (c) => `Receives request, routes to App Server using ${c.config?.algorithm || 'Round Robin'} algorithm (Stickiness: ${c.config?.stickiness ? 'ON' : 'OFF'})`,
    'api-gateway': (c) => 'Validates API key, checks rate limit, forwards request.',
    'app-server': (c) => `Generates Base62 hash (e.g., "a8Fk2Z") utilizing up to ${c.config?.threads || 200} thread(s)`,
    'sql-db': (c) => `Executes on DB Master (of ${c.config?.replication || 1} replica(s)): INSERT INTO urls (short_hash, long_url) VALUES ("a8Fk2Z", "...")`,
    'nosql-db': (c) => `Stores document across ${c.config?.nodes || 3} DB Node(s): { _id: "a8Fk2Z", url: "https://example.com..." }`,
    'cache': (c) => `Cache UPDATE (Evicts using ${c.config?.eviction || 'LRU'}): SET "a8Fk2Z" -> "https://example.com..."`
  },
  2: { // Chat Messaging
    'client': (c) => 'Opens WebSocket connection -> wss://chat.app',
    'load-balancer': (c) => `Maintains persistent TCP connection to backend (Stickiness: ${c.config?.stickiness ? 'ON' : 'OFF'})`,
    'api-gateway': (c) => 'Authenticates WS Token',
    'web-server': (c) => `Handles WS frame {to: "bob", msg: "Hello!"} (Timeout: ${c.config?.timeout || 1000}ms)`,
    'message-queue': (c) => `Publishes to "messages" topic across ${c.config?.shards || 3} Kafka shard(s) to decouple load`,
    'sql-db': (c) => 'Persists chat history: INSERT INTO messages...',
    'nosql-db': (c) => 'Persists chat history: INSERT INTO messages...',
    'cache': (c) => 'Checks if "bob" is actively online',
    'notification': (c) => 'User "bob" is offline. Triggers Apple Push Notification.'
  },
  3: { // Instagram
    'client': (c) => 'Uploads Image Buffer (Multi-part form data)',
    'cdn': (c) => 'Caches image for Edge distribution',
    'load-balancer': (c) => `Distributes image upload traffic using ${c.config?.algorithm || 'Round Robin'}`,
    'app-server': (c) => 'Resizes image, extracts EXIF data, builds metadata',
    'web-server': (c) => 'Resizes image, extracts EXIF data, builds metadata',
    'object-storage': (c) => 'Stores binary: PUT /images/post_123_1080p.jpg',
    'sql-db': (c) => `Executes on Master of ${c.config?.replication || 1} replica(s): INSERT INTO posts (user_id, image_url) VALUES (99, "s3://...")`,
    'nosql-db': (c) => `Appends to User Feed Document (Consistency: ${c.config?.consistency || 'Eventual'})`,
    'cache': (c) => `Invalidates/Updates Follower Feeds Cache (Evict: ${c.config?.eviction || 'LRU'})`,
    'message-queue': (c) => `Fan-out async task across ${c.config?.shards || 3} shard(s)`
  }
};


// ---- Global State ----
let currentPage = 'dashboard';
let currentProblem = null;
let components = [];
let connections = [];
let selectedComponent = null;
let currentTool = 'select';
let connectSource = null;
let nextCompId = 1;

// Canvas state
let canvas, ctx;
let zoom = 1, panX = 0, panY = 0;
let isDraggingCanvas = false, isDraggingComp = false;
let dragComp = null, dragOffX = 0, dragOffY = 0;
let lastMouseX = 0, lastMouseY = 0;
let failureMode = false;

// Trace state
let traceState = {
  active: false,
  path: [],     // Array of component IDs
  stepIndex: 0
};

// Simulation state
let simRunning = false;
let simSpeed = 1;
let simRate = 100;
let simTime = 0;
let simPackets = [];
let droppedPackets = [];
let simAnimFrame = null;
let simStats = { throughput:0, latency:0, errors:0, total:0, success:0 };
let lastSimTick = 0;
let packetSpawnAccum = 0;

// ---- Page Navigation ----
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector(`.nav-link[data-page="${page}"]`)?.classList.add('active');
  currentPage = page;

  // Close mobile menu if open
  const menu = document.getElementById('navLinks');
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
  }

  if (page === 'workspace') { initCanvas(); renderCanvas(); }
}

// ---- Dashboard ----
function renderProblems(filter = 'all') {
  const grid = document.getElementById('problemsGrid');
  grid.innerHTML = '';
  const filtered = PROBLEMS.filter(p => {
    if (filter === 'all') return true;
    if (['easy','medium','hard'].includes(filter)) return p.difficulty === filter;
    return p.category === filter;
  });
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'problem-card fade-in';
    card.style.animationDelay = (i * 0.05) + 's';
    
    // Add Pro badge html if necessary
    const lockHtml = p.isPremium 
      ? `<span style="background:var(--accent-warning); color:#fff; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:bold; margin-left:8px;">🔒 PRO</span>` 
      : ``;

    card.innerHTML = `
      <div class="problem-card-header">
        <span class="problem-number">#${String(p.id).padStart(3,'0')} ${lockHtml}</span>
        <span class="difficulty-badge ${p.difficulty}">${p.difficulty}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="problem-tags">${p.tags.map(t => `<span class="problem-tag">${t}</span>`).join('')}</div>
      <div class="problem-card-footer">
        <div class="problem-meta">
          <span>📋 ${p.requirements.length} requirements</span>
        </div>
        <button class="start-btn" onclick="startProblem(${p.id})">${p.isPremium ? 'Unlock Pro →' : 'Start →'}</button>
      </div>`;
    grid.appendChild(card);
    
    // Feature UX: Entire Card is Clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't trigger if they specifically clicked the start button (which fires startProblem natively)
      if (e.target.tagName !== 'BUTTON') {
        startProblem(p.id);
      }
    });
  });
}

// Filter buttons
document.getElementById('filterBar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProblems(btn.dataset.filter);
});

function startProblem(id) {
  const p = PROBLEMS.find(x => x.id === id);
  if (!p) return;
  
  // Paywall Access Restrictor
  if (p.isPremium) {
      if(confirm(`🔒 Upgrade to SystemForge PRO to access ${p.title}!\n\nUnlock unlimited FAANG interviews, masterclass PDFs, and all advanced components for just ₹799 ($10).\n\nClick OK to proceed to secure Razorpay checkout.`)) {
         window.open("https://razorpay.me/@sysforge", "_blank");
      }
      return;
  }

  currentProblem = p;
  document.getElementById('ws-problem-title').innerText = p.title;
  const diffBadge = document.getElementById('ws-difficulty');
  diffBadge.className = `difficulty-badge ${p.difficulty}`;
  diffBadge.innerText = p.difficulty;
  
  // Assuming clearCanvas() and updateRequirementsList() are defined elsewhere
  // and should be called after setting currentProblem.
  // For now, I'll keep the original logic for these parts.
  
  // Original logic from the provided snippet:
  // currentProblem = PROBLEMS.find(p => p.id === id);
  // if (!currentProblem) return;
  components = []; connections = []; selectedComponent = null; nextCompId = 1;
  simPackets = []; simRunning = false; simTime = 0;
  simStats = { throughput:0, latency:0, errors:0, total:0, success:0 };
  document.getElementById('ws-problem-title').textContent = currentProblem.title;
  const badge = document.getElementById('ws-difficulty');
  badge.textContent = currentProblem.difficulty;
  badge.className = 'difficulty-badge ' + currentProblem.difficulty;
  
  // Show/Hide Load Save button based on LocalStorage
  if (localStorage.getItem(`systemforge_save_${currentProblem.id}`)) {
    document.getElementById('loadSavedBtn').style.display = 'inline-flex';
  } else {
    document.getElementById('loadSavedBtn').style.display = 'none';
  }
  
  renderRequirements();
  showPage('workspace');
  addLog('info', `Loaded problem: ${currentProblem.title}`);
}

// ==== STATE MANAGEMENT ====
function saveDesign() {
  if (!currentProblem) return;
  const state = {
    components: components,
    connections: connections,
    nextCompId: nextCompId,
    panX: panX,
    panY: panY,
    zoom: zoom
  };
  localStorage.setItem(`systemforge_save_${currentProblem.id}`, JSON.stringify(state));
  document.getElementById('loadSavedBtn').style.display = 'inline-flex';
  addLog('success', '💾 Design saved successfully!');
}

function loadSavedDesign() {
  if (!currentProblem) return;
  const saved = localStorage.getItem(`systemforge_save_${currentProblem.id}`);
  if (!saved) return addLog('error', 'No saved design found.');
  
  try {
    const state = JSON.parse(saved);
    components = state.components || [];
    connections = state.connections || [];
    nextCompId = state.nextCompId || 1;
    panX = state.panX || 0;
    panY = state.panY || 0;
    zoom = state.zoom || 1;
    
    // clear sim state
    simPackets = [];
    simStats = { throughput:0, latency:0, errors:0, total:0, success:0 };
    stopTraceFlow();
    
    renderCanvas();
    addLog('info', '📥 Restored saved design architecture');
  } catch (e) {
    console.error(e);
    addLog('error', 'Failed to load saved design (corrupt data)');
  }
}

function renderRequirements() {
  if (!currentProblem) return;
  const desc = document.getElementById('problemDescription');
  desc.innerHTML = `<h3>${currentProblem.title}</h3><p>${currentProblem.desc}</p>
    <div class="hint-box"><h4>💡 Hint</h4><p>${currentProblem.hint}</p></div>`;
    
  const notesDesc = document.getElementById('notesContent');
  if (notesDesc) {
    if (currentProblem.id === 1) { // Detailed Alex Xu integration for URL Shortener
      notesDesc.innerHTML = `<h3>📘 Masterclass: URL Shortener</h3>
        <p style="margin-bottom: 20px;">Use the Study Guide below to prepare for your System Design interview.</p>
        
        <div style="background: rgba(124,106,255,0.05); border: 1px solid rgba(124,106,255,0.2); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
          <h4 style="color:var(--accent-primary); font-size:13px; margin-bottom: 8px;">Step 1: Understand problem & scope</h4>
          <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.5;">
            <strong>Traffic Volume:</strong> 100 million URLs generated per day.<br>
            <strong>Write Operations:</strong> 100M / 24 / 3600 = 1,160 writes/sec.<br>
            <strong>Read Operations:</strong> Assuming 10:1 ratio = 11,600 reads/sec.<br>
            <strong>Storage (10-yr cap):</strong> 365 billion records &times; 100 bytes = <strong>365 TB</strong>.
          </p>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Step 2: High-Level APIs (Redirects)</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;"><strong>301 Redirect:</strong> "Permanently moved". The browser fully caches the response, aggressively reducing URL server load.<br><strong>302 Redirect:</strong> "Temporarily moved". Best for tracking click-rates and analytics since every request securely hits the shortener API first before redirection.</p>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Step 3: Design Deep Dive (Hashing)</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;"><strong>Hash Value Length:</strong> We use [0-9, a-z, A-Z] = 62 characters. $62^7 = ~3.5$ trillion capacity, which covers 365 Billion URLs, scaling safely to exactly 7 characters in length.<br>
          <strong>Algorithms:</strong> Use <strong>Base 62 Conversion</strong> (mapping a unique DB distributed sequential ID to a Base62 string), OR use <strong>Hash + Collision Resolution</strong> (utilize MD5/SHA-1 and truncate the first 7 chars, appending sequences until unique).</p>
        </div>
      `;
    } else {
      notesDesc.innerHTML = `<h3>📘 Masterclass: ${currentProblem.title}</h3>
        <p style="margin-bottom: 20px;">Use the Study Guide below to prepare for your System Design interview.</p>
        
        <div style="background: rgba(255,170,0,0.05); border: 1px solid rgba(255,170,0,0.2); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
          <h4 style="color:#ffaa00; font-size:13px; margin-bottom: 8px;">🎯 Interviewer's Focus</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">The interviewer expects you to explicitly articulate your decisions regarding <strong>${currentProblem.tags.join(', ')}</strong> tradeoffs. Focus heavily on solving: <em>"${currentProblem.hint}"</em> before attempting to scale the system.</p>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Q: How do we achieve High Availability & fault tolerance?</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">A: Eliminate Single Points of Failure (SPOF) by deploying Active-Active Load Balancers with Heartbeat protocols. We make application servers entirely stateless, enabling rapid horizontal auto-scaling. The Database layer uses Master-Replica streaming across multiple Availability Zones to ensure zero data-loss.</p>
        </div>
        
        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Q: Database Technology: SQL vs NoSQL trade-offs?</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">A: Relational (SQL) guarantees strict ACID properties (Atomicity, Consistency) making it perfect for transactional safety. NoSQL (Cassandra/DynamoDB) provides immense horizontal scale, flexible schemas, and low-latency reads via denormalization, but frequently compromises on immediate consistency.</p>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Q: What is the optimal caching strategy for this system?</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">A: Implement a Redis/Memcached cluster using a Cache-Aside strategy to absorb heavy read queries. Cache eviction should strictly use LRU (Least Recently Used) coupled with a TTL (Time To Live) to handle stale data eviction safely.</p>
        </div>

        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 13px; margin-bottom: 6px; color: var(--text-primary);">Q: How do we decouple and scale heavy workflows?</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">A: By decoupling heavy synchronous tasks using a distributed Message Queue (Apache Kafka or RabbitMQ). The API Gateway publishes an event payload to the queue and instantly returns an HTTP 202. Dedicated Consumer microservices then pull from the logs at their own pace, providing smooth system-wide back-pressure control.</p>
        </div>
      `;
    }
  }
  updateRequirementsList();
}

function updateRequirementsList() {
  if (!currentProblem) return;
  const list = document.getElementById('requirementsList');
  const compTypes = new Set(components.map(c => c.type));
  list.innerHTML = currentProblem.requirements.map(r => {
    const met = r.needs.some(n => compTypes.has(n));
    return `<div class="requirement-item ${met ? 'met' : 'unmet'}">
      <div class="req-check">${met ? '✓' : ''}</div>
      <div class="req-text">${r.text}${r.optional ? ' (bonus)' : ''}</div>
    </div>`;
  }).join('');
}

// ---- PDF Download Engine ----
// Sanitize text for jsPDF (Helvetica only supports basic Latin chars)
function sanitizeForPDF(text) {
  return text
    .replace(/\u00a9/g, '(c)')
    .replace(/\u00d7/g, 'x')
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .replace(/\u2018/g, "'")
    .replace(/\u2019/g, "'")
    .replace(/\u201c/g, '"')
    .replace(/\u201d/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/\u2192/g, '->')
    .replace(/\u2190/g, '<-')
    .replace(/\u2265/g, '>=')
    .replace(/\u2264/g, '<=')
    .replace(/\u2713/g, '[ok]')
    .replace(/\u2717/g, '[x]')
    .replace(/\u2022/g, '-')
    .replace(/[^\x00-\x7F]/g, '');
}

function addWatermark(doc) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(60);
  doc.setTextColor(240, 240, 248);
  doc.text("SystemForge", 105, 148, { angle: 45, align: "center" });
}

function addPageFooter(doc, pageNum) {
  doc.setFontSize(8);
  doc.setTextColor(160, 160, 160);
  doc.text(sanitizeForPDF('(c) 2026 SystemForge PRO | System Design Interview Preparation | Page ' + pageNum), 20, 285);
  doc.setDrawColor(220, 220, 230);
  doc.line(20, 282, 190, 282);
}

function addSectionTitle(doc, title, yPos) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(124, 106, 255);
  doc.text(sanitizeForPDF(title), 20, yPos);
  doc.setDrawColor(124, 106, 255);
  doc.line(20, yPos + 2, 190, yPos + 2);
  return yPos + 10;
}

function addSubSection(doc, title, yPos) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(40, 40, 40);
  doc.text(sanitizeForPDF(title), 20, yPos);
  return yPos + 6;
}

function addBody(doc, text, yPos, indent) {
  indent = indent || 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  var lines = doc.splitTextToSize(sanitizeForPDF(text), 190 - indent);
  doc.text(lines, indent, yPos);
  return yPos + (lines.length * 4.5) + 3;
}

function downloadMasterclassPDF() {
  if (!currentProblem) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let pageNum = 1;

  if (currentProblem.id === 1) {
    // ============================
    // PAGE 1: Cover + Requirements
    // ============================
    addWatermark(doc);
    
    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text("SYSTEM DESIGN MASTERCLASS", 20, 22);
    doc.setFontSize(10);
    doc.setTextColor(124, 106, 255);
    doc.text("SystemForge PRO Interview Preparation Series", 20, 29);
    
    doc.setDrawColor(124, 106, 255);
    doc.setLineWidth(0.8);
    doc.line(20, 32, 190, 32);
    
    // Problem Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text("URL Shortener (TinyURL)", 20, 44);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    let desc = doc.splitTextToSize(sanitizeForPDF("Design a URL shortening service like TinyURL/Bitly that converts long URLs into compact short links, handles massive read-heavy traffic, and redirects users seamlessly."), 170);
    doc.text(desc, 20, 52);

    // How to Think
    let y = 68;
    y = addSectionTitle(doc, "HOW TO APPROACH THIS PROBLEM", y);
    y = addBody(doc, "1. Start by clarifying requirements with your interviewer. Never jump to solutions.", y);
    y = addBody(doc, "2. Estimate scale: QPS, storage, bandwidth. Show you think about numbers.", y);
    y = addBody(doc, "3. Propose a high-level design first. Get interviewer buy-in before going deep.", y);
    y = addBody(doc, "4. Deep dive into 1-2 critical components (hashing, database, caching).", y);
    y = addBody(doc, "5. Discuss trade-offs explicitly. There is no single correct answer.", y);
    y = addBody(doc, "6. Address edge cases and failure scenarios proactively.", y);

    // Functional Requirements
    y += 4;
    y = addSectionTitle(doc, "FUNCTIONAL REQUIREMENTS", y);
    y = addBody(doc, "FR1: Given a long URL, the service should generate a shorter and unique alias.", y, 25);
    y = addBody(doc, "FR2: When a user clicks a short link, it should redirect to the original long URL.", y, 25);
    y = addBody(doc, "FR3: Users should optionally be able to set a custom short link.", y, 25);
    y = addBody(doc, "FR4: Links should expire after a default timespan. Users can specify expiration.", y, 25);
    y = addBody(doc, "FR5: The service should expose REST APIs for creating and deleting URLs.", y, 25);
    
    // Non-Functional Requirements
    y += 4;
    y = addSectionTitle(doc, "NON-FUNCTIONAL REQUIREMENTS", y);
    y = addBody(doc, "NFR1: High Availability - The system must be up 99.99% of the time (< 52 min downtime/year).", y, 25);
    y = addBody(doc, "NFR2: Low Latency - URL redirection must happen within < 100ms (P99).", y, 25);
    y = addBody(doc, "NFR3: Scalability - Must handle 100M+ URL generations per day, 11,600 reads/sec.", y, 25);
    y = addBody(doc, "NFR4: Durability - Once a short URL is created, it must never be lost.", y, 25);
    y = addBody(doc, "NFR5: Security - Prevent malicious URL injection. Rate limit API to prevent abuse.", y, 25);

    addPageFooter(doc, pageNum++);
    
    // ======================================
    // PAGE 2: Back-of-Envelope + HLD + APIs
    // ======================================
    doc.addPage();
    addWatermark(doc);
    
    y = 20;
    y = addSectionTitle(doc, "BACK-OF-THE-ENVELOPE ESTIMATION", y);
    y = addSubSection(doc, "Traffic Estimation", y);
    y = addBody(doc, "Assumption: 100 million URLs generated per day.", y, 25);
    y = addBody(doc, "Write QPS: 100,000,000 / 86,400 = ~1,160 writes/sec", y, 25);
    y = addBody(doc, "Read-to-Write ratio: 10:1 (reads dominate in URL shorteners)", y, 25);
    y = addBody(doc, "Read QPS: 1,160 x 10 = 11,600 reads/sec", y, 25);
    
    y += 2;
    y = addSubSection(doc, "Storage Estimation", y);
    y = addBody(doc, "System lifespan: 10 years", y, 25);
    y = addBody(doc, "Total records: 100M x 365 x 10 = 365 billion URLs", y, 25);
    y = addBody(doc, "Average URL object size: ~100 bytes (shortURL + longURL + metadata)", y, 25);
    y = addBody(doc, "Total storage: 365 billion x 100 bytes = ~36.5 TB", y, 25);
    
    y += 2;
    y = addSubSection(doc, "Bandwidth Estimation", y);
    y = addBody(doc, "Write bandwidth: 1,160 x 100 bytes = ~116 KB/s (negligible)", y, 25);
    y = addBody(doc, "Read bandwidth: 11,600 x 100 bytes = ~1.16 MB/s", y, 25);

    y += 4;
    y = addSectionTitle(doc, "HIGH-LEVEL ARCHITECTURE DIAGRAM", y);
    
    // ASCII Architecture Diagram
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.setTextColor(40, 40, 40);
    const diagram = [
      "+----------+       +----------------+       +------------------+",
      "|  Client  | ----> | Load Balancer  | ----> |  App Server (x3) |",
      "| (Browser)|       | (Nginx/ALB)    |       |  (Stateless)     |",
      "+----------+       +----------------+       +--------+---------+",
      "                                                     |",
      "                          +---------------------------+------------------+",
      "                          |                           |                  |",
      "                   +------v------+           +--------v-------+  +-------v-------+",
      "                   | Redis Cache |           | Primary DB     |  | Analytics     |",
      "                   | (LRU, TTL)  |           | (MySQL/Postgres|  | (Kafka +      |",
      "                   +-------------+           | + Replicas)    |  |  ClickHouse)  |",
      "                                             +----------------+  +---------------+"
    ];
    diagram.forEach((line, i) => {
      doc.text(sanitizeForPDF(line), 15, y + (i * 4));
    });
    y += diagram.length * 4 + 6;

    y = addSectionTitle(doc, "API DESIGN (RESTful)", y);
    y = addSubSection(doc, "1. Create Short URL (POST)", y);
    y = addBody(doc, "POST /api/v1/data/shorten", y, 25);
    y = addBody(doc, "Request Body: { \"longUrl\": \"https://example.com/very-long-path\", \"customAlias\": \"mylink\", \"expireDate\": \"2027-01-01\" }", y, 25);
    y = addBody(doc, "Response 201: { \"shortUrl\": \"https://tinyurl.com/ab12cd3\" }", y, 25);
    
    y += 2;
    y = addSubSection(doc, "2. Redirect Short URL (GET)", y);
    y = addBody(doc, "GET /api/v1/{shortUrl}", y, 25);
    y = addBody(doc, "Response 301/302: Redirect to original longUrl", y, 25);
    
    y += 2;
    y = addSubSection(doc, "3. Delete URL (DELETE)", y);
    y = addBody(doc, "DELETE /api/v1/data/shorten/{shortUrl}", y, 25);
    y = addBody(doc, "Response 204: No Content (URL removed)", y, 25);

    addPageFooter(doc, pageNum++);
    
    // ====================================
    // PAGE 3: Deep Dive - Hashing + DB
    // ====================================
    doc.addPage();
    addWatermark(doc);
    
    y = 20;
    y = addSectionTitle(doc, "DEEP DIVE: URL SHORTENING ALGORITHMS", y);
    
    y = addSubSection(doc, "Hash Value Length Calculation", y);
    y = addBody(doc, "Character set: [0-9, a-z, A-Z] = 62 possible characters", y, 25);
    y = addBody(doc, "n=6: 62^6 = ~56.8 billion (insufficient for 365B records)", y, 25);
    y = addBody(doc, "n=7: 62^7 = ~3.52 trillion (safely covers 365B URLs)", y, 25);
    y = addBody(doc, "Conclusion: Hash length = 7 characters", y, 25);
    
    y += 4;
    y = addSubSection(doc, "Option A: Hash + Collision Resolution", y);
    y = addBody(doc, "1. Apply a well-known hash function (MD5, SHA-1, CRC32) to the long URL.", y, 25);
    y = addBody(doc, "2. Take the first 7 characters of the hash output.", y, 25);
    y = addBody(doc, "3. Check DB for collision. If collision exists, append a predefined string and re-hash.", y, 25);
    y = addBody(doc, "4. Pros: No need for a unique ID generator. Cons: Collision checks add latency.", y, 25);
    y = addBody(doc, "5. Use Bloom Filter to reduce DB lookups: probabilistic check before querying DB.", y, 25);
    
    y += 4;
    y = addSubSection(doc, "Option B: Base 62 Conversion", y);
    y = addBody(doc, "1. Generate a globally unique integer ID using a Distributed ID Generator (Twitter Snowflake, DB auto-increment).", y, 25);
    y = addBody(doc, "2. Convert the integer to a Base62 string: e.g., ID 11157 -> \"2TX\" in Base62.", y, 25);
    y = addBody(doc, "3. Pros: Guaranteed unique (no collisions). Cons: Short URLs are predictable (sequential).", y, 25);
    y = addBody(doc, "4. Mitigation: Use Snowflake IDs which embed timestamp + machine ID + sequence.", y, 25);
    
    y += 4;
    y = addSectionTitle(doc, "DATABASE SCHEMA DESIGN", y);
    
    // Schema Table
    doc.setFont("courier", "normal");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    const schema = [
      "+-------------------+------------------+",
      "| Column            | Type             |",
      "+-------------------+------------------+",
      "| id (PK)           | BIGINT AUTO_INCR |",
      "| short_url (Index) | VARCHAR(7)       |",
      "| long_url          | VARCHAR(2048)    |",
      "| created_at        | TIMESTAMP        |",
      "| expires_at        | TIMESTAMP NULL   |",
      "| user_id (FK)      | BIGINT           |",
      "+-------------------+------------------+"
    ];
    schema.forEach((line, i) => {
      doc.text(sanitizeForPDF(line), 25, y + (i * 4));
    });
    y += schema.length * 4 + 6;

    y = addSubSection(doc, "Why Relational DB (MySQL/PostgreSQL)?", y);
    y = addBody(doc, "URL mappings are simple key-value relationships with strong consistency needs. Relational DBs provide ACID guarantees. For massive scale, use DB sharding with Consistent Hashing on the short_url column.", y, 25);

    y += 4;
    y = addSectionTitle(doc, "URL REDIRECTION FLOW (301 vs 302)", y);
    y = addSubSection(doc, "301 Permanent Redirect", y);
    y = addBody(doc, "Browser caches the mapping. Subsequent requests bypass the URL shortener entirely. Reduces server load significantly. Best when analytics tracking is NOT critical.", y, 25);
    y += 2;
    y = addSubSection(doc, "302 Temporary Redirect", y);
    y = addBody(doc, "Browser does NOT cache. Every request hits the URL shortener first. Enables click-rate analytics, A/B testing, and geographic tracking. Higher server load but richer data.", y, 25);

    addPageFooter(doc, pageNum++);
    
    // ======================================
    // PAGE 4: Caching + Edge Cases + Q&A
    // ======================================
    doc.addPage();
    addWatermark(doc);
    
    y = 20;
    y = addSectionTitle(doc, "CACHING STRATEGY (Redis)", y);
    y = addBody(doc, "Read-heavy system (10:1 ratio) demands aggressive caching to reduce DB pressure.", y, 25);
    y += 2;
    y = addSubSection(doc, "Cache-Aside Pattern (Lazy Loading)", y);
    y = addBody(doc, "1. Client requests short URL -> Check Redis cache first.", y, 25);
    y = addBody(doc, "2. Cache HIT: Return long URL immediately (< 1ms latency).", y, 25);
    y = addBody(doc, "3. Cache MISS: Query DB, store result in Redis with TTL, then return.", y, 25);
    y = addBody(doc, "4. Eviction Policy: LRU (Least Recently Used) to keep hot URLs in memory.", y, 25);
    y = addBody(doc, "5. Cache size estimation: Top 20% of URLs generate 80% of traffic (Pareto). 11,600 RPS x 86,400 sec x 20% = ~200M daily. 200M x 100 bytes = ~20GB Redis cluster.", y, 25);
    
    y += 4;
    y = addSectionTitle(doc, "EDGE CASES & FAILURE SCENARIOS", y);
    y = addBody(doc, "1. Duplicate Long URLs: Should the same long URL always map to the same short URL? Decision impacts storage and cache hit rates.", y, 25);
    y = addBody(doc, "2. URL Expiration: Background cleanup job (cron) to purge expired URLs from DB and cache. Handle 404 gracefully for expired links.", y, 25);
    y = addBody(doc, "3. Rate Limiting: Implement token bucket or sliding window rate limiter at API Gateway to prevent abuse and DDoS attacks.", y, 25);
    y = addBody(doc, "4. Hot URLs: A viral URL can cause thundering herd on a single cache shard. Solution: Replicate hot keys across multiple Redis nodes.", y, 25);
    y = addBody(doc, "5. Custom Alias Collision: When users request custom aliases, validate uniqueness against DB before accepting. Return 409 Conflict if taken.", y, 25);
    y = addBody(doc, "6. Database Failover: Master-Replica setup with automatic failover. Use read replicas for redirection queries. Write to master only.", y, 25);
    y = addBody(doc, "7. Malicious URLs: Integrate with Google Safe Browsing API or similar service to scan URLs before accepting them into the system.", y, 25);

    y += 4;
    y = addSectionTitle(doc, "INTERVIEW Q&A FLASHCARDS", y);
    
    y = addSubSection(doc, "Q: Why not just use a random string generator instead of hashing?", y);
    y = addBody(doc, "A: Random strings require a DB uniqueness check on every generation. At 1,160 writes/sec, this creates contention. Base62 conversion from a distributed ID generator guarantees uniqueness without any checks.", y, 25);
    
    y = addSubSection(doc, "Q: How do you handle the system going down?", y);
    y = addBody(doc, "A: Stateless app servers behind a load balancer allow instant failover. Redis Cluster provides automatic shard failover. DB uses streaming replication with auto-promote. DNS-level health checks route traffic away from unhealthy regions.", y, 25);
    
    y = addSubSection(doc, "Q: How would you scale this to handle 10x traffic?", y);
    y = addBody(doc, "A: Horizontal scaling of stateless app servers. Redis cluster auto-sharding. DB partitioning using consistent hashing on short_url. CDN for static assets. Read replicas for geographic distribution.", y, 25);

    y = addSubSection(doc, "Q: What monitoring would you set up?", y);
    y = addBody(doc, "A: Track metrics: URL creation rate, redirection latency (P50/P95/P99), cache hit ratio (target > 90%), DB connection pool utilization, error rates (4xx/5xx). Use Prometheus + Grafana dashboards with PagerDuty alerting.", y, 25);

    addPageFooter(doc, pageNum++);

  } else {
    // ==========================================
    // RICH MULTI-PAGE PDF FOR ALL OTHER PROBLEMS
    // ==========================================
    const PROBLEM_NOTES = {
      2: { // Chat Messaging System
        title: "Chat Messaging System (WhatsApp)",
        overview: "Design a real-time chat application supporting 1-on-1 messaging, group chats, read receipts, presence indicators, and media sharing for 500M+ daily active users.",
        frs: ["FR1: 1-on-1 real-time messaging with delivery confirmation.", "FR2: Group chats supporting up to 256 members.", "FR3: Sent/Delivered/Read receipts for every message.", "FR4: Online/Offline presence indicator.", "FR5: Media sharing (images, videos, documents) up to 100MB.", "FR6: Push notifications for offline users."],
        nfrs: ["NFR1: Ultra-low latency (<100ms message delivery for online users).", "NFR2: High Availability (99.99% uptime, zero message loss).", "NFR3: Message ordering guarantee within a conversation.", "NFR4: End-to-end encryption (Signal Protocol).", "NFR5: Support 500M+ DAU with 60B+ messages/day."],
        traffic: ["DAU: 500 million users.", "Messages/day: 60 billion (avg 120 messages/user).", "Write QPS: 60B / 86,400 = ~694,000 writes/sec.", "Peak QPS: ~1.4M writes/sec (2x average).", "Storage/year: 60B x 100 bytes x 365 = ~2.2 PB/year."],
        diagram: ["+----------+      +----------------+      +------------------+", "|  Mobile  | ---> | Load Balancer  | ---> | WebSocket Server |", "|  Client  |      | (Layer 4/TCP)  |      | (Stateful Conn)  |", "+----------+      +----------------+      +--------+---------+", "                                                   |", "                        +--------------------------+---------------+", "                        |                          |               |", "                 +------v------+          +--------v------+  +----v--------+", "                 | Kafka/Queue |          | Cassandra DB  |  | Push Notif  |", "                 | (Fan-out)   |          | (Messages)    |  | (FCM/APNs)  |", "                 +-------------+          +---------------+  +-------------+"],
        apis: [{m:"POST",e:"/api/v1/messages/send",b:"{ \"to\": \"userId\", \"content\": \"Hello!\", \"type\": \"text\" }",r:"202 Accepted: { \"messageId\": \"uuid\", \"timestamp\": 1711234567 }"},{m:"GET",e:"/api/v1/messages/{conversationId}?cursor=xxx",b:"Pagination with cursor-based scrolling",r:"200: { \"messages\": [...], \"nextCursor\": \"xxx\" }"},{m:"WebSocket",e:"ws://chat.example.com/connect",b:"Persistent bidirectional connection for real-time delivery",r:"Frames: message, ack, typing, presence"}],
        deepDive: {title:"Message Delivery & Ordering", points:["Use WebSocket for real-time bidirectional communication. HTTP long-polling as fallback.", "Message ordering: Use Snowflake-style IDs (timestamp + server + sequence) per conversation.", "Fan-out: When User A sends to Group, publish to Kafka topic. Each member's WebSocket server consumes.", "Offline delivery: Store undelivered messages in Cassandra. Push via FCM/APNs. Deliver on reconnect.", "Read receipts: Client sends ACK with messageId. Server updates status: sent -> delivered -> read."]},
        schema: ["+-------------------+------------------+", "| Column            | Type             |", "+-------------------+------------------+", "| message_id (PK)   | BIGINT (Snowflake|", "| conversation_id   | UUID             |", "| sender_id         | BIGINT           |", "| content           | TEXT (encrypted) |", "| type              | ENUM(text,media) |", "| status            | ENUM(sent,dlvd)  |", "| created_at        | TIMESTAMP        |", "+-------------------+------------------+"],
        caching: ["Cache recent conversations per user in Redis (last 50 messages).", "Presence cache: User online/offline status with TTL (30s heartbeat).", "Group member list cache to avoid DB lookup on every group message.", "Cache size: 500M users x 50 msgs x 200 bytes = ~5TB Redis cluster."],
        edgeCases: ["1. Message ordering across multiple devices (use vector clocks or last-write-wins).", "2. Group message storm: 256-member group = 256 fan-out writes per message.", "3. Connection drops mid-message: Client-side retry with idempotency key.", "4. Media upload timeout: Use pre-signed S3 URLs for direct client upload.", "5. Spam/abuse: Rate limit messages per user (e.g., 100 msgs/min).", "6. Data migration: Schema evolution without downtime using dual-write strategy."],
        qna: [{q:"Why WebSocket over HTTP polling?",a:"WebSocket maintains a persistent TCP connection, enabling sub-100ms delivery. HTTP polling wastes bandwidth with empty responses and adds 1-2s latency."},{q:"How do you guarantee message ordering?",a:"Assign monotonically increasing Snowflake IDs per conversation. Client-side sorts by ID. Server enforces sequence within a partition key."},{q:"How do you handle 500M concurrent connections?",a:"Horizontally scale WebSocket servers. Use consistent hashing to map userId -> server. Store connection mapping in Redis for cross-server delivery."},{q:"Why Cassandra over MySQL for messages?",a:"Cassandra provides linear write scalability, tunable consistency, and time-series optimized storage (perfect for append-heavy chat logs). MySQL would bottleneck at this write QPS."}]
      },
      3: { // Instagram
        title: "Instagram / Photo Sharing Platform",
        overview: "Design a photo/video sharing platform supporting uploads, news feed generation, likes, comments, followers, and stories for 2B+ monthly active users.",
        frs: ["FR1: Upload photos/videos with captions and filters.", "FR2: Follow/unfollow users.", "FR3: Generate personalized news feed from followed users.", "FR4: Like and comment on posts.", "FR5: Stories (24-hour ephemeral content).", "FR6: Search users and hashtags."],
        nfrs: ["NFR1: News feed generation < 500ms.", "NFR2: Image upload < 2s (perceived latency).", "NFR3: 99.99% availability.", "NFR4: Support 500M+ DAU, 100M+ photos/day.", "NFR5: Eventual consistency acceptable for feeds."],
        traffic: ["DAU: 500 million.", "Photo uploads: 100 million/day.", "Write QPS: 100M / 86,400 = ~1,160 uploads/sec.", "Feed reads: 500M x 10 opens/day = 5B reads/day = ~58,000 reads/sec.", "Storage/year: 100M x 2MB avg x 365 = ~73 PB/year (images + videos)."],
        diagram: ["+----------+     +-------+     +----------------+     +--------------+", "|  Mobile  | --> |  CDN  | --> | Load Balancer  | --> |  App Server  |", "|  Client  |     | (Edge)|     | (Nginx/ALB)    |     |  (Stateless) |", "+----------+     +-------+     +----------------+     +------+-------+", "                                                            |", "              +-------------------+-----------------+--------+--------+", "              |                   |                 |                  |", "       +------v------+    +-------v-------+  +------v------+  +-------v------+", "       |   S3/Blob   |    | User/Post DB  |  | Redis Cache |  | Kafka Queue  |", "       |  (Images)   |    | (PostgreSQL)  |  | (Feed Cache)|  | (Feed Gen)   |", "       +-------------+    +---------------+  +-------------+  +--------------+"],
        apis: [{m:"POST",e:"/api/v1/posts",b:"multipart/form-data: { image, caption, location }",r:"201: { \"postId\": \"uuid\", \"imageUrl\": \"cdn.example.com/...\" }"},{m:"GET",e:"/api/v1/feed?cursor=xxx",b:"Cursor-based pagination for infinite scroll",r:"200: { \"posts\": [...], \"nextCursor\": \"xxx\" }"},{m:"POST",e:"/api/v1/posts/{id}/like",b:"{ }",r:"200: { \"likesCount\": 1234 }"}],
        deepDive: {title:"News Feed Generation (Fan-out)", points:["Fan-out-on-write for normal users: When User A posts, pre-compute feed for all followers.", "Fan-out-on-read for celebrities (>1M followers): Too expensive to write to millions of feeds.", "Hybrid approach: Fan-out-on-write for users with <10K followers. On-read merge for celebrities.", "Feed storage: Redis sorted sets (score = timestamp) per userId. Keep last 500 posts.", "Ranking: ML-based ranking model scores posts by engagement probability before serving."]},
        schema: ["+-------------------+------------------+", "| Column            | Type             |", "+-------------------+------------------+", "| post_id (PK)      | UUID             |", "| user_id (FK)      | BIGINT           |", "| image_url         | VARCHAR(512)     |", "| caption           | TEXT             |", "| location          | POINT (lat,lng)  |", "| likes_count       | INT DEFAULT 0    |", "| created_at        | TIMESTAMP        |", "+-------------------+------------------+"],
        caching: ["Feed cache: Redis sorted sets per user (last 500 post IDs).", "Post cache: Individual post objects cached with TTL.", "User profile cache: Follower/following counts.", "CDN edge caching for all image/video assets (90%+ cache hit ratio)."],
        edgeCases: ["1. Celebrity posting to 100M followers: Use fan-out-on-read, not write.", "2. Duplicate uploads: Hash image content (perceptual hash) to detect duplicates.", "3. Image resizing: Generate multiple resolutions (thumbnail, medium, full) asynchronously.", "4. Feed consistency: User posts but doesn't see own post immediately (solve with read-after-write consistency).", "5. Delete propagation: Soft delete + async background cleanup from all follower feeds.", "6. NSFW content: ML-based content moderation pipeline before publishing."],
        qna: [{q:"Fan-out-on-write vs fan-out-on-read?",a:"Write: Pre-compute feeds when a post is created (fast reads, expensive writes). Read: Merge feeds at query time (slow reads, cheap writes). Instagram uses a hybrid: write for normal users, read for celebrities."},{q:"How do you store 73 PB of images?",a:"Object storage (S3/GCS) with CDN. Images are immutable, so cache-friendly. Use content-based addressing for deduplication."},{q:"How do you rank the feed?",a:"ML ranking model considers: post age, engagement history, content type, user relationship strength. Chronological feed is a fallback."},{q:"How do you handle Stories?",a:"Ephemeral storage with 24hr TTL. Store in Redis with auto-expiry. Separate from permanent post storage."}]
      },
      4: { // Twitter
        title: "Twitter / Social Feed Platform",
        overview: "Design a social media platform supporting tweets, retweets, home timeline, trending topics, search, and notifications for 300M+ DAU.",
        frs: ["FR1: Post tweets (280 chars + media).", "FR2: Follow/unfollow users.", "FR3: Home timeline (feed of followed users' tweets).", "FR4: Search tweets by keyword/hashtag.", "FR5: Trending topics (real-time).", "FR6: Notifications (mentions, likes, retweets)."],
        nfrs: ["NFR1: Timeline rendering < 300ms.", "NFR2: Tweet publishing < 500ms (perceived).", "NFR3: 99.99% availability.", "NFR4: 300M DAU, 500M tweets/day.", "NFR5: Eventual consistency for timelines."],
        traffic: ["DAU: 300 million.", "Tweets/day: 500 million.", "Write QPS: 500M / 86,400 = ~5,800 tweets/sec.", "Timeline reads: 300M x 20 opens/day = 6B = ~69,400 reads/sec.", "Average fanout: 200 followers per user."],
        diagram: ["+----------+     +-------+     +---------------+     +--------------+", "|  Client  | --> |  CDN  | --> | API Gateway   | --> |  App Server  |", "+----------+     +-------+     | (Rate Limit)  |     |  (Stateless) |", "                                +---------------+     +------+-------+", "                                                            |", "          +-------------------+---------------------+--------+--------+", "          |                   |                     |                  |", "   +------v------+    +-------v--------+    +-------v------+  +-------v-------+", "   | Fan-out Svc |    | Timeline Cache |    |  Tweet DB    |  | ElasticSearch |", "   | (Kafka)     |    | (Redis)        |    | (MySQL Shard)|  | (Search)      |", "   +-------------+    +----------------+    +--------------+  +---------------+"],
        apis: [{m:"POST",e:"/api/v1/tweets",b:"{ \"content\": \"Hello world!\", \"mediaIds\": [] }",r:"201: { \"tweetId\": \"snowflakeId\", \"createdAt\": \"...\" }"},{m:"GET",e:"/api/v1/timeline/home?cursor=xxx",b:"Cursor pagination",r:"200: { \"tweets\": [...], \"nextCursor\": \"xxx\" }"},{m:"GET",e:"/api/v1/search?q=keyword",b:"ElasticSearch-powered full-text search",r:"200: { \"results\": [...] }"}],
        deepDive: {title:"Fan-out Strategy for Timeline", points:["Fan-out-on-write: When a tweet is posted, push tweet ID into every follower's Redis timeline.", "For celebrity users (>500K followers): Fan-out-on-read to avoid writing to millions of timelines.", "Timeline service merges: pre-computed timeline + on-demand celebrity tweets at read time.", "Trending: Stream processing (Kafka Streams/Flink) counts hashtags in sliding 5-min windows.", "Search: ElasticSearch cluster indexes tweets by content, hashtags, and user mentions."]},
        schema: ["+-------------------+------------------+", "| Column            | Type             |", "+-------------------+------------------+", "| tweet_id (PK)     | BIGINT (Snowflake|", "| user_id (FK)      | BIGINT           |", "| content           | VARCHAR(280)     |", "| media_urls        | JSON             |", "| retweet_of        | BIGINT NULL      |", "| reply_to          | BIGINT NULL      |", "| created_at        | TIMESTAMP        |", "+-------------------+------------------+"],
        caching: ["Home timeline: Redis list per user (last 800 tweet IDs).", "Tweet object cache: Individual tweet data with 24h TTL.", "User profile + follower count cache.", "Trending topics cache: Refresh every 5 minutes from stream processor."],
        edgeCases: ["1. Celebrity tweet storm: Fan-out to 50M followers would take minutes. Use hybrid approach.", "2. Delete tweet: Remove from author's timeline + async purge from follower caches.", "3. Edit tweet: Twitter's approach — create new version, keep audit trail.", "4. Spam bots: ML classifier + rate limiting (max 100 tweets/hour).", "5. Viral tweet: Cache hot tweets at CDN edge to reduce origin load.", "6. Real-time trending manipulation: Anomaly detection on hashtag velocity."],
        qna: [{q:"Why fan-out-on-write for normal users?",a:"With avg 200 followers, writing to 200 Redis lists is fast. Read becomes O(1) — just fetch the pre-built timeline. This optimizes for the common case (reads >> writes)."},{q:"How does Twitter handle search?",a:"ElasticSearch cluster indexes tweets in near-real-time. Inverted index on tokenized content, hashtags, and mentions. Geo-partitioned for low latency."},{q:"How do you calculate trending topics?",a:"Kafka Streams counts hashtag frequency in sliding windows (5min/1hr/24hr). Normalize by historical baseline to detect spikes, not just volume."},{q:"How do you shard the tweet database?",a:"Shard by userId (all tweets by one user on same shard). Enables efficient user-timeline queries. Cross-shard search handled by ElasticSearch."}]
      }
    };

    // Fallback content for problems not yet detailed (IDs 5-12)
    const problemData = PROBLEM_NOTES[currentProblem.id] || {
      title: currentProblem.title,
      overview: currentProblem.desc,
      frs: currentProblem.requirements.map((r,i) => `FR${i+1}: ${r.text}${r.optional ? ' (bonus)' : ''}`),
      nfrs: ["NFR1: High Availability (99.99% uptime, multi-AZ).", "NFR2: Low Latency (P99 < 200ms for reads).", "NFR3: Horizontal scalability (handle 10x traffic spikes).", "NFR4: Data durability (zero data loss, replication).", "NFR5: Security (authentication, rate limiting, encryption)."],
      traffic: ["Estimate daily active users and peak QPS.", `Key focus areas: ${currentProblem.tags.join(', ')}.`, "Calculate storage needs for 5-10 year horizon.", "Identify read-to-write ratio for caching decisions.", `Hint: ${currentProblem.hint}`],
      diagram: ["+----------+      +----------------+      +------------------+", "|  Client  | ---> | Load Balancer  | ---> |  App Server (x3) |", "+----------+      +----------------+      +--------+---------+", "                                                   |", "                        +--------------------------+---------------+", "                        |                          |               |", "                 +------v------+          +--------v------+  +----v--------+", "                 | Cache Layer |          | Database      |  | Message Q   |", "                 | (Redis)     |          | (SQL/NoSQL)   |  | (Kafka)     |", "                 +-------------+          +---------------+  +-------------+"],
      apis: [{m:"POST",e:"/api/v1/resource",b:"{ ...payload }",r:"201 Created"},{m:"GET",e:"/api/v1/resource/{id}",b:"Path parameter",r:"200 OK: { ...resource }"},{m:"DELETE",e:"/api/v1/resource/{id}",b:"Authorization required",r:"204 No Content"}],
      deepDive: {title:`Deep Dive: ${currentProblem.tags[0]}`, points:[`Primary challenge: ${currentProblem.hint}`, "Consider horizontal vs vertical scaling trade-offs.", "Evaluate consistency vs availability (CAP theorem).", "Design for failure: What happens when each component goes down?", "Think about data partitioning strategy (hash-based vs range-based)."]},
      schema: ["+-------------------+------------------+", "| Column            | Type             |", "+-------------------+------------------+", "| id (PK)           | BIGINT / UUID    |", "| key_field (Index) | VARCHAR          |", "| data              | JSON / TEXT      |", "| created_at        | TIMESTAMP        |", "| updated_at        | TIMESTAMP        |", "+-------------------+------------------+"],
      caching: ["Identify hot data using Pareto principle (80/20 rule).", "Cache-Aside pattern with Redis for read-heavy paths.", "LRU eviction with appropriate TTL based on data freshness needs.", "Estimate cache size: hot_data_percentage x total_data_size."],
      edgeCases: ["1. Thundering herd: Multiple cache misses on the same key simultaneously.", "2. Data consistency: Stale cache after DB update (use cache invalidation).", "3. Network partitions: Design for CAP theorem trade-offs.", "4. Hot partitions: Uneven load distribution across shards.", "5. Cascading failures: Circuit breaker pattern to isolate failing services.", "6. Schema migration: Zero-downtime changes using dual-write strategy."],
      qna: [{q:"How do you eliminate Single Points of Failure?",a:"Active-Active Load Balancers, stateless app servers, DB Master-Replica with auto-failover across AZs."},{q:"SQL vs NoSQL - how do you choose?",a:"SQL for ACID-critical data. NoSQL for massive writes and flexible schemas. Many systems use both (polyglot persistence)."},{q:"How do you handle a cache stampede?",a:"Distributed locks (Redlock), request coalescing, jittered TTLs to prevent mass expiration."},{q:"What monitoring would you set up?",a:"Prometheus + Grafana: latency percentiles (P50/P95/P99), error rates, cache hit ratio, DB connection utilization. PagerDuty for alerting."}]
    };

    // ============================
    // PAGE 1: Cover + Requirements
    // ============================
    addWatermark(doc);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text("SYSTEM DESIGN MASTERCLASS", 20, 22);
    doc.setFontSize(10);
    doc.setTextColor(124, 106, 255);
    doc.text("SystemForge PRO Interview Preparation Series", 20, 29);
    doc.setDrawColor(124, 106, 255);
    doc.setLineWidth(0.8);
    doc.line(20, 32, 190, 32);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text(sanitizeForPDF(problemData.title), 20, 44);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    let pdDesc = doc.splitTextToSize(sanitizeForPDF(problemData.overview), 170);
    doc.text(pdDesc, 20, 52);

    let y = 66;
    y = addSectionTitle(doc, "HOW TO APPROACH THIS PROBLEM", y);
    y = addBody(doc, "1. Clarify requirements with your interviewer. Never jump to solutions.", y);
    y = addBody(doc, "2. Estimate scale: QPS, storage, bandwidth. Show you think about numbers.", y);
    y = addBody(doc, "3. Propose a high-level design first. Get interviewer buy-in before going deep.", y);
    y = addBody(doc, "4. Deep dive into 1-2 critical components the interviewer cares about.", y);
    y = addBody(doc, "5. Discuss trade-offs explicitly. There is no single correct answer.", y);
    y = addBody(doc, "6. Address edge cases and failure scenarios proactively.", y);

    y += 4;
    y = addSectionTitle(doc, "FUNCTIONAL REQUIREMENTS", y);
    problemData.frs.forEach(fr => { y = addBody(doc, fr, y, 25); });

    y += 4;
    y = addSectionTitle(doc, "NON-FUNCTIONAL REQUIREMENTS", y);
    problemData.nfrs.forEach(nfr => { y = addBody(doc, nfr, y, 25); });

    addPageFooter(doc, pageNum++);

    // ======================================
    // PAGE 2: Back-of-Envelope + HLD + APIs
    // ======================================
    doc.addPage();
    addWatermark(doc);
    y = 20;
    y = addSectionTitle(doc, "BACK-OF-THE-ENVELOPE ESTIMATION", y);
    problemData.traffic.forEach(t => { y = addBody(doc, t, y, 25); });

    y += 4;
    y = addSectionTitle(doc, "HIGH-LEVEL ARCHITECTURE DIAGRAM", y);
    doc.setFont("courier", "normal");
    doc.setFontSize(7);
    doc.setTextColor(40, 40, 40);
    problemData.diagram.forEach((line, i) => {
      doc.text(sanitizeForPDF(line), 12, y + (i * 3.5));
    });
    y += problemData.diagram.length * 3.5 + 6;

    y = addSectionTitle(doc, "API DESIGN (RESTful)", y);
    problemData.apis.forEach((api, i) => {
      y = addSubSection(doc, `${i+1}. ${api.m} ${api.e}`, y);
      y = addBody(doc, `Request: ${api.b}`, y, 25);
      y = addBody(doc, `Response: ${api.r}`, y, 25);
      y += 2;
    });

    addPageFooter(doc, pageNum++);

    // ====================================
    // PAGE 3: Deep Dive + DB Schema
    // ====================================
    doc.addPage();
    addWatermark(doc);
    y = 20;
    y = addSectionTitle(doc, `DEEP DIVE: ${problemData.deepDive.title.toUpperCase()}`, y);
    problemData.deepDive.points.forEach(p => { y = addBody(doc, p, y, 25); });

    y += 4;
    y = addSectionTitle(doc, "DATABASE SCHEMA DESIGN", y);
    doc.setFont("courier", "normal");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    problemData.schema.forEach((line, i) => {
      doc.text(sanitizeForPDF(line), 25, y + (i * 4));
    });
    y += problemData.schema.length * 4 + 6;

    y = addSectionTitle(doc, "CACHING STRATEGY", y);
    problemData.caching.forEach(c => { y = addBody(doc, c, y, 25); });

    addPageFooter(doc, pageNum++);

    // ======================================
    // PAGE 4: Edge Cases + Q&A
    // ======================================
    doc.addPage();
    addWatermark(doc);
    y = 20;
    y = addSectionTitle(doc, "EDGE CASES & FAILURE SCENARIOS", y);
    problemData.edgeCases.forEach(ec => { y = addBody(doc, ec, y, 25); });

    y += 4;
    y = addSectionTitle(doc, "INTERVIEW Q&A FLASHCARDS", y);
    problemData.qna.forEach(qa => {
      y = addSubSection(doc, `Q: ${qa.q}`, y);
      y = addBody(doc, `A: ${qa.a}`, y, 25);
      y += 2;
    });

    addPageFooter(doc, pageNum++);
  }
  
  // Trigger file download robustly (fixes Safari UUID filename and Chrome timeout issues)
  try {
    const safeTitle = currentProblem.title.replace(/[^a-zA-Z0-9]+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    const filename = `${safeTitle}_Interview_Guide.pdf`;
    
    // Explicitly generate a clean blob with application/pdf MIME type
    const pdfBlob = doc.output('blob', { type: 'application/pdf' });
    const url = window.URL.createObjectURL(pdfBlob);
    
    // Create an invisible anchor to force download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup: 60 seconds timeout ensures Chrome has plenty of time to scan and save 
    // the blob before we revoke the memory pointer.
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 60000);
    
    addLog('success', '📄 Downloaded Full Interview PDF Blueprint!');
  } catch (err) {
    console.error("PDF Generate Error:", err);
    addLog('error', '⚠️ PDF generation failed. Check console for details.');
  }
}

// ---- Canvas Setup ----
function initCanvas() {
  canvas = document.getElementById('designCanvas');
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.removeEventListener('resize', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  if (!canvas) return;
  const container = document.getElementById('canvasContainer');
  canvas.width = container.clientWidth * window.devicePixelRatio;
  canvas.height = container.clientHeight * window.devicePixelRatio;
  canvas.style.width = container.clientWidth + 'px';
  canvas.style.height = container.clientHeight + 'px';
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  renderCanvas();
}

// ---- Canvas Rendering ----
function renderCanvas() {
  if (!ctx) return;
  const w = canvas.width / window.devicePixelRatio;
  const h = canvas.height / window.devicePixelRatio;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(panX, panY);
  ctx.scale(zoom, zoom);
  drawGrid(w, h);
  drawConnections();
  drawPackets();
  drawComponents();
  ctx.restore();
  // Overlay
  const overlay = document.getElementById('canvasOverlay');
  overlay.classList.toggle('hidden', components.length > 0);
  updateStatusBar();
  if (simRunning) simAnimFrame = requestAnimationFrame(simLoop);
}

function drawGrid(w, h) {
  const gridSize = 30;
  ctx.strokeStyle = 'rgba(124,106,255,0.04)';
  ctx.lineWidth = 1;
  const sx = Math.floor((-panX / zoom) / gridSize) * gridSize;
  const sy = Math.floor((-panY / zoom) / gridSize) * gridSize;
  const ex = sx + w / zoom + gridSize * 2;
  const ey = sy + h / zoom + gridSize * 2;
  for (let x = sx; x <= ex; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, sy); ctx.lineTo(x, ey); ctx.stroke();
  }
  for (let y = sy; y <= ey; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(sx, y); ctx.lineTo(ex, y); ctx.stroke();
  }
}

function drawConnections() {
  connections.forEach(conn => {
    const from = components.find(c => c.id === conn.from);
    const to = components.find(c => c.id === conn.to);
    if (!from || !to) return;
    
    // Centers of the nodes
    const fx = from.x + 70, fy = from.y + 35;
    const tx = to.x + 70, ty = to.y + 35;
    
    const dx = tx - fx, dy = ty - fy;
    
    // Draw.io style orthogonal S-curve (Cubic Bezier)
    // Biased towards the dominant axis for a clean flow-chart look
    const cp1x = fx + (Math.abs(dx) > Math.abs(dy) ? dx * 0.4 : 0);
    const cp1y = fy + (Math.abs(dy) >= Math.abs(dx) ? dy * 0.4 : 0);
    const cp2x = tx - (Math.abs(dx) > Math.abs(dy) ? dx * 0.4 : 0);
    const cp2y = ty - (Math.abs(dy) >= Math.abs(dx) ? dy * 0.4 : 0);

    // Calculate exact bounding box collision so the arrow stops on the edge of the box
    let tix = tx, tiy = ty;
    const tdx = tx - cp2x, tdy = ty - cp2y;
    
    if (tdx !== 0 || tdy !== 0) {
      const scaleX = 73 / Math.abs(tdx); // 70px + 3px padding
      const scaleY = 38 / Math.abs(tdy); // 35px + 3px padding
      const scale = Math.min(scaleX, Math.abs(tdy) === 0 ? Infinity : scaleY, Math.abs(tdx) === 0 ? Infinity : scaleX);
      if (scale < 1) {
        tix = tx - tdx * scale;
        tiy = ty - tdy * scale;
      }
    }

    // Draw the Line
    ctx.beginPath();
    ctx.moveTo(fx, fy);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, tix, tiy);
    
    // Animate a sleek, dashed flow-line for active connections (AWS / Enterprise style)
    if (conn.active) {
       ctx.setLineDash([8, 8]); // the "dash" separation
       ctx.lineDashOffset = -(simTime * 40); // animate flow forward
       ctx.strokeStyle = 'rgba(0, 212, 170, 0.8)';
       ctx.lineWidth = 2;
       // removed heavy shadowBlur to fix performance lag on older devices
    } else {
       ctx.setLineDash([]);
       ctx.strokeStyle = 'rgba(124, 106, 255, 0.3)';
       ctx.lineWidth = 1.5;
    }
    
    ctx.stroke();
    
    // Reset dashes before drawing sharp Arrowhead
    ctx.setLineDash([]);

    // Draw a sharp Professional Chevron Arrowhead
    const arrAngle = Math.atan2(ty - cp2y, tx - cp2x);
    ctx.save();
    ctx.translate(tix, tiy);
    ctx.rotate(arrAngle);
    ctx.beginPath();
    ctx.moveTo(0, 0); 
    ctx.lineTo(-10, -5);
    ctx.lineTo(-10, 5); 
    ctx.closePath();
    ctx.fillStyle = conn.active ? 'rgba(0, 212, 170, 0.9)' : 'rgba(124, 106, 255, 0.5)';
    ctx.fill();
    ctx.restore();
  });
}

function drawComponents() {
  components.forEach(comp => {
    const def = COMP_DEFS[comp.type];
    if (!def) return;
    const x = comp.x, y = comp.y, w = 140, h = 70;
    const isSelected = selectedComponent && selectedComponent.id === comp.id;
    // Shadow & glow
    if (isSelected) {
      ctx.shadowColor = def.color;
      ctx.shadowBlur = 20;
    }
    // Background
    ctx.fillStyle = comp.dead ? 'rgba(255,68,102,0.12)' : `rgba(${hexToRgb(def.color)},0.1)`;
    ctx.strokeStyle = comp.dead ? 'rgba(255,68,102,0.5)' : isSelected ? def.color : `rgba(${hexToRgb(def.color)},0.3)`;
    ctx.lineWidth = isSelected ? 2 : 1;
    roundRect(ctx, x, y, w, h, 10, true, true);
    ctx.shadowBlur = 0;
    // Load bar
    if (simRunning || comp.load > 0) {
      const loadW = (w - 8) * Math.min(1, comp.load / 100);
      const loadColor = comp.load > 80 ? '#ff4466' : comp.load > 50 ? '#ffaa00' : '#00d4aa';
      ctx.fillStyle = loadColor + '33';
      roundRect(ctx, x + 4, y + h - 10, loadW, 6, 3, true, false);
    }
    // Icon
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(def.icon, x + 10, y + 32);
    // Label
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = comp.dead ? '#ff4466' : '#e8e8ff';
    ctx.fillText(comp.name || def.label, x + 38, y + 28);
    // Sublabel
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#6a6a99';
    let sublabel = comp.dead ? '❌ DOWN' : `${Math.round(comp.load)}% load`;
    if (comp.type === 'client') sublabel = comp.dead ? '❌ OFFLINE' : 'Traffic Generator';
    ctx.fillText(sublabel, x + 38, y + 44);
    // Dead X overlay
    if (comp.dead) {
      ctx.strokeStyle = 'rgba(255,68,102,0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x+10, y+10); ctx.lineTo(x+w-10, y+h-10); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x+w-10, y+10); ctx.lineTo(x+10, y+h-10); ctx.stroke();
    }
    
    // Trace Mode Highlight
    if (traceState.active && traceState.stepIndex < traceState.path.length && traceState.path[traceState.stepIndex] === comp.id) {
       ctx.strokeStyle = '#00d4aa';
       ctx.lineWidth = 3;
       ctx.shadowColor = '#00d4aa';
       ctx.shadowBlur = 15;
       roundRect(ctx, x - 5, y - 5, w + 10, h + 10, 12, false, true);
       ctx.shadowBlur = 0;
    }
  });
}

function drawPackets() {
  // Packet visualizations are now handled by animated dashed lines in drawConnections
  // This function now only handles rendering Floating Error Texts (e.g. 503, 502, RIP) for dropped packets
  
  // Dropped Packets (HTTP Errors/Timeouts)
  for (let i = droppedPackets.length - 1; i >= 0; i--) {
    const d = droppedPackets[i];
    const age = simTime - d.spawnTime;
    if (age > 1) { droppedPackets.splice(i, 1); continue; } // decay after 1s
    
    ctx.globalAlpha = 1 - age;
    ctx.font = 'bold 14px Inter';
    ctx.textAlign = 'center';
    
    const px = d.x + (d.vx || 0) * age;
    const py = d.y - ((d.vy || 20) * age);
    
    // Strong black outline prevents text from blurring together when heavily overlapped
    ctx.strokeStyle = 'rgba(0,0,0,0.9)';
    ctx.lineWidth = 3;
    ctx.strokeText(d.msg, px, py);
    
    ctx.fillStyle = '#ff4466';
    ctx.fillText(d.msg, px, py);
    
    ctx.globalAlpha = 1;
  }
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

// ---- Canvas Input ----
document.addEventListener('DOMContentLoaded', () => {
  renderProblems();
  const cc = document.getElementById('canvasContainer');
  cc.addEventListener('mousedown', onCanvasMouseDown);
  cc.addEventListener('mousemove', onCanvasMouseMove);
  cc.addEventListener('mouseup', onCanvasMouseUp);
  
  // Mobile Touch Support for Canvas Panning and Component Dragging
  cc.addEventListener('touchstart', e => {
    if(e.target === document.getElementById('designCanvas')) e.preventDefault();
    if(e.touches.length > 0) {
       onCanvasMouseDown({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY, button: 1, preventDefault: ()=>{} });
    }
  }, { passive: false });
  cc.addEventListener('touchmove', e => {
    if(e.target === document.getElementById('designCanvas')) e.preventDefault();
    if(e.touches.length > 0) {
       onCanvasMouseMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY, preventDefault: ()=>{} });
    }
  }, { passive: false });
  cc.addEventListener('touchend', e => {
    if(e.target === document.getElementById('designCanvas')) e.preventDefault();
    onCanvasMouseUp({ button: 1, preventDefault: ()=>{} });
  }, { passive: false });

  cc.addEventListener('wheel', onCanvasWheel, { passive: false });
  cc.addEventListener('contextmenu', onContextMenu);
  cc.addEventListener('dblclick', onCanvasDblClick);
  // Drag and drop from palette
  document.querySelectorAll('.palette-item[draggable]').forEach(el => {
    el.addEventListener('dragstart', onPaletteDragStart);
    el.addEventListener('dragend', onPaletteDragEnd);
  });
  cc.addEventListener('dragover', e => e.preventDefault());
  cc.addEventListener('drop', onCanvasDrop);
  document.addEventListener('click', () => { document.getElementById('contextMenu').classList.remove('show'); });
});

let paletteDropType = null;

function onPaletteDragStart(e) {
  paletteDropType = e.currentTarget.dataset.comp;
  e.dataTransfer.effectAllowed = 'copy';
  const ghost = document.getElementById('dragGhost');
  const def = COMP_DEFS[paletteDropType];
  ghost.innerHTML = `${def.icon} ${def.label}`;
  ghost.style.display = 'flex';
  ghost.style.left = '-1000px';
  e.dataTransfer.setDragImage(ghost, 60, 20);
}

function onPaletteDragEnd() {
  document.getElementById('dragGhost').style.display = 'none';
  paletteDropType = null;
}

function onCanvasDrop(e) {
  e.preventDefault();
  if (!paletteDropType) return;
  const rect = canvas.getBoundingClientRect();
  const mx = (e.clientX - rect.left - panX) / zoom;
  const my = (e.clientY - rect.top - panY) / zoom;
  addComponent(paletteDropType, mx - 70, my - 35);
  paletteDropType = null;
}

function addComponent(type, x, y) {
  const def = COMP_DEFS[type];
  if (!def) return;
  
  // Initialize default config
  const config = {};
  if (CONFIG_DEFS[type]) {
    CONFIG_DEFS[type].forEach(field => {
      config[field.key] = field.default;
    });
  }

  const comp = {
    id: nextCompId++, type, x, y,
    name: def.label,
    load: 0, dead: false,
    latency: def.latency, maxLoad: def.maxLoad,
    config: config,
    lbCounter: 0 // For round-robin LB
  };
  applyComponentPerformance(comp);
  
  components.push(comp);
  addLog('success', `Added ${def.label}`);
  updateRequirementsList();
  updateMetrics();
  renderCanvas();
  // Auto-select the newly added component
  selectedComponent = comp;
  showProperties(comp);
}

function toCanvasCoords(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  return { x: (clientX - rect.left - panX) / zoom, y: (clientY - rect.top - panY) / zoom };
}

function hitTest(mx, my) {
  for (let i = components.length - 1; i >= 0; i--) {
    const c = components[i];
    if (mx >= c.x && mx <= c.x + 140 && my >= c.y && my <= c.y + 70) return c;
  }
  return null;
}

function onCanvasMouseDown(e) {
  if (e.button === 2) return;
  const { x, y } = toCanvasCoords(e.clientX, e.clientY);
  const hit = hitTest(x, y);
  if (currentTool === 'connect' && hit) {
    if (!connectSource) { connectSource = hit; addLog('info', `Connect from ${hit.name}...`); }
    else if (hit.id !== connectSource.id) {
      const exists = connections.some(c => (c.from===connectSource.id && c.to===hit.id)||(c.from===hit.id && c.to===connectSource.id));
      if (!exists) { connections.push({ from:connectSource.id, to:hit.id, active:false }); addLog('success', `Connected ${connectSource.name} → ${hit.name}`); }
      connectSource = null;
    }
    renderCanvas(); return;
  }
  if (currentTool === 'delete' && hit) {
    deleteComponent(hit.id); return;
  }
  if (failureMode && hit) {
    hit.dead = !hit.dead;
    addLog(hit.dead ? 'error' : 'success', `${hit.name} ${hit.dead ? 'KILLED' : 'RESTORED'}`);
    failureMode = false;
    renderCanvas(); return;
  }
  if (hit) {
    selectedComponent = hit;
    isDraggingComp = true;
    dragComp = hit;
    dragOffX = x - hit.x;
    dragOffY = y - hit.y;
    showProperties(hit);
  } else {
    selectedComponent = null;
    hideProperties();
    isDraggingCanvas = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
  renderCanvas();
}

function onCanvasMouseMove(e) {
  const { x, y } = toCanvasCoords(e.clientX, e.clientY);
  document.getElementById('canvasCoords').textContent = `${Math.round(x)}, ${Math.round(y)}`;
  if (isDraggingComp && dragComp) {
    dragComp.x = x - dragOffX;
    dragComp.y = y - dragOffY;
    renderCanvas();
  } else if (isDraggingCanvas) {
    panX += e.clientX - lastMouseX;
    panY += e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    renderCanvas();
  }
}

function onCanvasMouseUp() {
  isDraggingComp = false; isDraggingCanvas = false; dragComp = null;
}

function onCanvasWheel(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;
  panX = mx - (mx - panX) * delta;
  panY = my - (my - panY) * delta;
  zoom = Math.max(0.2, Math.min(3, zoom * delta));
  document.getElementById('zoomLevel').textContent = Math.round(zoom * 100) + '%';
  renderCanvas();
}

function onContextMenu(e) {
  e.preventDefault();
  const { x, y } = toCanvasCoords(e.clientX, e.clientY);
  const hit = hitTest(x, y);
  if (hit) {
    selectedComponent = hit;
    const menu = document.getElementById('contextMenu');
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
    menu.classList.add('show');
  }
}

function onCanvasDblClick(e) {
  const { x, y } = toCanvasCoords(e.clientX, e.clientY);
  const hit = hitTest(x, y);
  if (hit) { selectedComponent = hit; showProperties(hit); switchPanel('properties'); }
}

// ---- Tools ----
function setTool(tool) {
  currentTool = tool;
  connectSource = null;
  document.querySelectorAll('.toolbar-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tool-' + tool)?.classList.add('active');
  canvas.style.cursor = tool === 'connect' ? 'crosshair' : tool === 'delete' ? 'not-allowed' : 'default';
}

function zoomIn() { zoom = Math.min(3, zoom * 1.2); document.getElementById('zoomLevel').textContent = Math.round(zoom*100) + '%'; renderCanvas(); }
function zoomOut() { zoom = Math.max(0.2, zoom * 0.8); document.getElementById('zoomLevel').textContent = Math.round(zoom*100) + '%'; renderCanvas(); }
function zoomReset() { zoom = 1; panX = 0; panY = 0; document.getElementById('zoomLevel').textContent = '100%'; renderCanvas(); }

// ---- Component Operations ----
function deleteComponent(id) {
  components = components.filter(c => c.id !== id);
  connections = connections.filter(c => c.from !== id && c.to !== id);
  if (selectedComponent?.id === id) { selectedComponent = null; hideProperties(); }
  updateRequirementsList(); renderCanvas();
  addLog('warning', 'Component deleted');
}

function deleteSelected() { if (selectedComponent) deleteComponent(selectedComponent.id); }
function deleteFromContext() { if (selectedComponent) deleteComponent(selectedComponent.id); }

function clearCanvas() {
  components = []; connections = []; selectedComponent = null; nextCompId = 1;
  simPackets = []; hideProperties(); updateRequirementsList(); renderCanvas();
  addLog('warning', 'Canvas cleared');
}

function duplicateComponent() {
  if (!selectedComponent) return;
  addComponent(selectedComponent.type, selectedComponent.x + 30, selectedComponent.y + 30);
}

function connectFromContext() { if (selectedComponent) { connectSource = selectedComponent; setTool('connect'); } }

function toggleComponentHealth() {
  if (!selectedComponent) return;
  selectedComponent.dead = !selectedComponent.dead;
  addLog(selectedComponent.dead ? 'error' : 'success', `${selectedComponent.name} ${selectedComponent.dead ? 'KILLED' : 'RESTORED'}`);
  showProperties(selectedComponent);
  renderCanvas();
}

// ---- Properties Panel ----
function showProperties(comp) {
  const def = COMP_DEFS[comp.type];
  document.getElementById('propsPlaceholder').style.display = 'none';
  document.getElementById('propsContent').style.display = 'block';
  
  // Header
  document.getElementById('propName').value = comp.name;
  const iconEl = document.getElementById('propIcon');
  iconEl.textContent = def.icon;
  iconEl.style.background = `rgba(${hexToRgb(def.color)}, 0.15)`;
  iconEl.style.border = `1px solid rgba(${hexToRgb(def.color)}, 0.4)`;
  document.getElementById('propType').textContent = def.label;
  
  // Stats
  document.getElementById('propStatus').textContent = comp.dead ? '🔴 Down' : '🟢 Healthy';
  document.getElementById('propStatus').style.color = comp.dead ? '#ff4466' : '#00d4aa';
  document.getElementById('propLoadText').textContent = Math.round(comp.load) + '%';
  document.getElementById('propLatency').textContent = comp.latency + 'ms';
  
  // Progress Bar
  const loadBar = document.getElementById('propLoadBar');
  loadBar.style.width = Math.min(100, comp.load) + '%';
  loadBar.style.background = comp.load > 85 ? '#ff4466' : comp.load > 60 ? '#ffaa00' : '#00d4aa';
  
  // Config Section
  renderComponentConfig(comp);
  
  document.getElementById('healthToggleBtn').textContent = comp.dead ? '💚 Restore' : '💥 Kill';
}

function renderComponentConfig(comp) {
  const configSection = document.getElementById('propConfigSection');
  const fields = CONFIG_DEFS[comp.type];
  
  if (!fields || fields.length === 0) {
    configSection.innerHTML = '<div style="font-size:11px;color:var(--text-muted);text-align:center;padding:10px;background:rgba(255,255,255,0.03);border-radius:6px;">No advanced settings for this component</div>';
    return;
  }
  
  let html = '<div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin:16px 0 8px;">Settings</div>';
  
  fields.forEach(f => {
    html += `<div class="prop-group" style="margin-bottom:12px;">
      <div class="prop-label" style="font-size:10px;margin-bottom:4px;">${f.label}</div>`;
    
    const val = comp.config[f.key];
    
    if (f.type === 'select') {
      html += `<select class="prop-input" onchange="updateComponentConfig('${f.key}', this.value)" style="padding:6px 10px;">
        ${f.options.map(opt => `<option value="${opt}" ${opt === val ? 'selected' : ''}>${opt}</option>`).join('')}
      </select>`;
    } else if (f.type === 'number') {
      html += `<input type="number" class="prop-input" value="${val}" min="${f.min}" max="${f.max}" oninput="updateComponentConfig('${f.key}', parseFloat(this.value))" style="padding:6px 10px;"/>`;
    } else if (f.type === 'toggle') {
      html += `<div onclick="updateComponentConfig('${f.key}', ${!val})" style="cursor:pointer;display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:6px;font-size:12px;">
        <div style="width:14px;height:14px;border-radius:3px;border:2px solid ${val ? '#00d4aa' : '#555'};background:${val ? '#00d4aa' : 'transparent'};position:relative;">
          ${val ? '<span style="position:absolute;top:-4px;left:1px;font-size:10px;color:black;">✓</span>' : ''}
        </div>
        ${val ? 'Enabled' : 'Disabled'}
      </div>`;
    }
    
    html += `</div>`;
  });
  
  configSection.innerHTML = html;
}

function applyComponentPerformance(comp) {
  const def = COMP_DEFS[comp.type];
  if (!def) return;
  
  let newMax = def.maxLoad;
  let newLat = def.latency;
  
  if (comp.type === 'sql-db') {
    const repl = comp.config?.replication || 1;
    newMax = def.maxLoad * repl;
    newLat = Math.max(10, 30 - (repl * 3));
    if (comp.config?.indexing) newMax *= 3;
  } else if (comp.type === 'nosql-db') {
    const nodes = comp.config?.nodes || 3;
    newMax = (def.maxLoad / 3) * nodes;
    newLat = Math.max(5, 10 - (nodes * 0.5));
  } else if (comp.type === 'app-server' || comp.type === 'web-server') {
    const threads = comp.config?.threads || 200;
    newMax = (def.maxLoad / 200) * threads;
  } else if (comp.type === 'microservice') {
    const instances = comp.config?.instances || 3;
    newMax = (def.maxLoad / 3) * instances;
  } else if (comp.type === 'stream-processing') {
    const workers = comp.config?.workers || 5;
    newMax = (def.maxLoad / 5) * workers;
  } else if (comp.type === 'waf') {
    if (comp.config?.ruleset === 'Strict') newLat += 20;
    else if (comp.config?.ruleset === 'OWASP Top 10') newLat += 10;
  } else if (comp.type === 'rate-limiter') {
    newMax = comp.config?.capacity || 5000;
  } else if (comp.type === 'data-warehouse') {
    const nodes = comp.config?.nodes || 2;
    newMax = (def.maxLoad / 2) * nodes;
    if (comp.config?.olap) newLat -= 100;
  } else if (comp.type === 'api-gateway') {
    const rateLimit = comp.config?.rateLimit || 1000;
    newMax = rateLimit;
    if (comp.config?.auth !== 'None') newLat += 5; // JWT/OAuth adds slight delay
  } else if (comp.type === 'dns') {
    if (comp.config?.routing === 'Latency' || comp.config?.routing === 'Geolocation') newLat -= 15; // Better routing
  } else if (comp.type === 'cdn') {
    if (comp.config?.compression !== 'None') newMax *= 1.5; // Compression boosts throughput
  } else if (comp.type === 'search') {
    const shards = comp.config?.shards || 5;
    const replicas = comp.config?.replicas || 1;
    newMax = (def.maxLoad / 5) * shards * (replicas + 1);
  } else if (comp.type === 'message-queue') {
    const shards = comp.config?.shards || 3;
    newMax = (def.maxLoad / 3) * shards;
  } else if (comp.type === 'notification') {
    const batch = comp.config?.batchSize || 100;
    newMax = (def.maxLoad / 100) * batch;
  }
  
  comp.maxLoad = newMax;
  comp.latency = newLat;
}

function updateComponentConfig(key, value) {
  if (!selectedComponent) return;
  selectedComponent.config[key] = value;
  
  applyComponentPerformance(selectedComponent);
  
  renderCanvas();
  showProperties(selectedComponent); // Re-render props to show updated state
}

function hideProperties() {
  document.getElementById('propsPlaceholder').style.display = 'block';
  document.getElementById('propsContent').style.display = 'none';
}

function updateComponentName(val) { if (selectedComponent) { selectedComponent.name = val; renderCanvas(); } }

// ---- Panel Switching ----
function switchPanel(panel) {
  document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.panel-tab[data-panel="${panel}"]`)?.classList.add('active');
  document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
  document.getElementById('panel-' + panel)?.classList.add('active');
}

// ---- Status Bar ----
function updateStatusBar() {
  document.getElementById('componentCount').textContent = `${components.length} components · ${connections.length} connections`;
  const dot = document.getElementById('statusDot');
  const txt = document.getElementById('statusText');
  if (simRunning) { dot.className = 'status-dot simulating'; txt.textContent = 'Simulating...'; }
  else { dot.className = 'status-dot'; txt.textContent = 'Ready'; }
}

// ---- Simulation Log ----
function addLog(type, msg) {
  const log = document.getElementById('simLog');
  const mins = String(Math.floor(simTime / 60)).padStart(2,'0');
  const secs = String(Math.floor(simTime % 60)).padStart(2,'0');
  const entry = document.createElement('div');
  entry.className = 'log-entry ' + type;
  entry.innerHTML = `<span class="timestamp">[${mins}:${secs}]</span>${msg}`;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
  // Keep max 100 entries
  while (log.children.length > 100) log.removeChild(log.firstChild);
}

// ============================================
// TRACE DATA FLOW ENGINE
// ============================================
function startTraceFlow() {
  if (!currentProblem) return addLog('error', 'Select a problem first!');
  if (components.length === 0) return addLog('error', 'Add components first!');
  
  const clients = components.filter(c => c.type === 'client');
  if (clients.length === 0) return addLog('error', 'Need a Client to start trace!');
  
  const path = findTracePath(clients[0].id);
  if (path.length < 2) return addLog('error', 'Connect Client to backend to trace flow!');
  
  if (simRunning) pauseSimulation();
  
  traceState = { active: true, path: path, stepIndex: 0 };
  addLog('info', '🔍 Started Trace Data Flow mode');
  showTraceTooltip();
  renderCanvas();
}

function stopTraceFlow() {
  traceState.active = false;
  document.getElementById('traceTooltip').style.display = 'none';
  renderCanvas();
  addLog('info', '⏹ Trace flow ended.');
}

function nextTraceStep() {
  if (!traceState.active) return;
  traceState.stepIndex++;
  if (traceState.stepIndex >= traceState.path.length) {
    stopTraceFlow();
  } else {
    showTraceTooltip();
    renderCanvas();
  }
}

function findTracePath(startId) {
  const path = [startId];
  let curr = startId;
  const visited = new Set([curr]);
  
  while (true) {
    const outs = connections.filter(c => c.from === curr && !visited.has(c.to));
    if (outs.length === 0) break;
    // Prefer healthy compute/db nodes
    const healthy = outs.filter(c => {
       const t = components.find(comp => comp.id === c.to);
       return t && !t.dead;
    });
    const selected = healthy.length > 0 ? healthy[Math.floor(Math.random() * healthy.length)] : outs[0];
    
    curr = selected.to;
    path.push(curr);
    visited.add(curr);
  }
  return path;
}

function showTraceTooltip() {
  if (!traceState.active || traceState.stepIndex >= traceState.path.length) return;
  
  const compId = traceState.path[traceState.stepIndex];
  const comp = components.find(c => c.id === compId);
  if (!comp) return stopTraceFlow();
  
  const tooltip = document.getElementById('traceTooltip');
  const title = document.getElementById('traceTitle');
  const body = document.getElementById('traceBody');
  
  title.textContent = `Step ${traceState.stepIndex + 1}: ${comp.name}`;
  
  const globalTraceFallback = {
    'client': 'Initiates HTTP/WS request from user device.',
    'dns': 'Resolves domain name to IP address (e.g. 192.168.1.1).',
    'cdn': 'Intercepts request to serve cached static assets/media from edge location.',
    'load-balancer': c => `Distributes incoming traffic across healthy nodes using ${c.config?.algorithm || 'Round Robin'}.`,
    'api-gateway': 'Authenticates request, checks rate limits, and forwards to backend services.',
    'waf': 'Inspects incoming packets for SQLi/XSS malicious payloads.',
    'rate-limiter': c => `Throttle check (max ${c.config?.rpsLimit || 1000} req/s).`,
    'web-server': 'Handles HTTP connection and serves requested frontend/API logic.',
    'app-server': 'Executes core business logic and computational tasks.',
    'microservice': 'Executes specialized domain logic and communicates via gRPC/REST.',
    'stream-processing': 'Processes high-throughput realtime data streams.',
    'zookeeper': 'Provides distributed consensus and service discovery.',
    'sql-db': c => `Executes ACID-compliant transactional query on DB Master (of ${c.config?.replication || 1} replicas).`,
    'nosql-db': 'Reads/writes unstructured document data for high throughput.',
    'cache': c => `Checks in-memory cache. Miss -> Fetch. Hit -> Return (Eviction: ${c.config?.eviction || 'LRU'}).`,
    'object-storage': 'Retrieves large binary blob (image, video, file) from bucket storage.',
    'search': 'Executes full-text inverted index search query.',
    'data-warehouse': 'Runs heavy analytical aggregation query (OLAP).',
    'message-queue': c => `Appends event to topic queue across ${c.config?.shards || 3} shard(s) for async processing.`,
    'notification': 'Pushes real-time alert/notification to target device.',
    'logger': 'Appends telemetry and audit logs for system observability.'
  };
  
  let msg = 'Processes request data...'; // ultimate fallback
  if (PROBLEM_TRACES[currentProblem.id] && PROBLEM_TRACES[currentProblem.id][comp.type]) {
    const traceDef = PROBLEM_TRACES[currentProblem.id][comp.type];
    msg = typeof traceDef === 'function' ? traceDef(comp) : traceDef;
  } else if (globalTraceFallback[comp.type]) {
    const fb = globalTraceFallback[comp.type];
    msg = typeof fb === 'function' ? fb(comp) : fb;
  }
  
  body.textContent = msg;
  
  // Position tooltip relative to component
  const canvasRect = canvas.getBoundingClientRect();
  const screenX = canvasRect.left + (comp.x + panX) * zoom + 90 * zoom;
  const screenY = canvasRect.top + (comp.y + panY) * zoom - 10 * zoom;
  
  tooltip.style.left = `${screenX}px`;
  tooltip.style.top = `${screenY}px`;
  tooltip.style.display = 'block';
}

// ============================================
// SIMULATION ENGINE
// ============================================
function toggleSimulation() {
  if (simRunning) { pauseSimulation(); } else { startSimulation(); }
}

function startSimulation() {
  if (components.length === 0) { addLog('error', 'Add components before simulating!'); return; }
  if (connections.length === 0) { addLog('error', 'Connect components before simulating!'); return; }
  simRunning = true;
  lastSimTick = performance.now();
  packetSpawnAccum = 0;
  document.getElementById('simPlayBtn').innerHTML = '⏸ Pause';
  document.getElementById('simPlayBtn').classList.add('running');
  addLog('info', `▶ Simulation started at ${simRate} req/s`);
  simLoop();
}

function pauseSimulation() {
  simRunning = false;
  document.getElementById('simPlayBtn').innerHTML = '▶ Play';
  document.getElementById('simPlayBtn').classList.remove('running');
  addLog('info', '⏸ Simulation paused');
  cancelAnimationFrame(simAnimFrame);
}

function stopSimulation() {
  simRunning = false;
  simPackets = [];
  droppedPackets = [];
  simTime = 0;
  simStats = { throughput:0, latency:0, errors:0, total:0, success:0 };
  components.forEach(c => { c.load = 0; });
  document.getElementById('simPlayBtn').innerHTML = '▶ Play';
  document.getElementById('simPlayBtn').classList.remove('running');
  cancelAnimationFrame(simAnimFrame);
  updateMetrics();
  renderCanvas();
  addLog('info', '⏹ Simulation stopped');
}

function resetSimulation() { stopSimulation(); }

function stressTest() {
  const origRate = simRate;
  const slider = document.getElementById('rateSlider');
  const shockRate = Math.min(10000, simRate * 10);
  
  slider.value = shockRate;
  updateRate(shockRate);
  addLog('warning', `🔥 SHOCK TRAFFIC: Spiked request rate to ${shockRate} req/s!`);
  
  if (!simRunning) startSimulation();
  
  setTimeout(() => {
    slider.value = origRate;
    updateRate(origRate);
    addLog('info', `📉 Shock over. Returning to ${origRate} req/s.`);
  }, 3000);
}

function updateRate(val) {
  simRate = parseInt(val);
  document.getElementById('rateValue').textContent = val >= 1000 ? (val/1000).toFixed(1) + 'k req/s' : val + ' req/s';
}

function updateSpeed(val) {
  simSpeed = parseFloat(val);
  document.getElementById('speedValue').textContent = val + 'x';
}

function injectFailure() {
  failureMode = true;
  addLog('warning', '💥 Click a component to kill/restore it');
}

function simLoop() {
  if (!simRunning) return;
  const now = performance.now();
  const dt = Math.min((now - lastSimTick) / 1000, 0.1) * simSpeed;
  lastSimTick = now;
  simTime += dt;

  // Spawn packets
  packetSpawnAccum += simRate * dt;
  let spawnCount = Math.floor(packetSpawnAccum);
  if (spawnCount > 0) {
    packetSpawnAccum -= spawnCount;
    let maxVisual = Math.min(spawnCount, 3);
    let rem = spawnCount;
    for (let i = 0; i < maxVisual; i++) {
       let w = Math.ceil(rem / (maxVisual - i));
       spawnPacket(w);
       rem -= w;
    }
  }

  // Update packets
  updatePackets(dt);
  // Update component loads
  updateLoads(dt);
  // Update metrics display
  updateMetrics();
  updateSystemAdvisor();
  // Render
  renderCanvas();
}

function spawnPacket(weight = 1) {
  const clients = components.filter(c => c.type === 'client' && !c.dead);
  const source = clients.length > 0 ? clients[Math.floor(Math.random() * clients.length)] : (components.length > 0 ? components.find(c => !c.dead) : null);
  if (!source) return;

  const outConns = connections.filter(c => c.from === source.id);
  if (outConns.length === 0) return;

  let conn;
  // Load Balancer Logic
  if (source.type === 'load-balancer') {
    const aliveConns = outConns.filter(cn => {
      const target = components.find(comp => comp.id === cn.to);
      return target && !target.dead;
    });
    
    if (aliveConns.length === 0) {
      simStats.errors++;
      return; 
    }

    const algo = source.config?.algorithm || 'Round Robin';
    if (algo === 'Round Robin') {
      source.lbCounter = (source.lbCounter || 0) % aliveConns.length;
      conn = aliveConns[source.lbCounter];
      source.lbCounter++;
    } else if (algo === 'Least Connections') {
      aliveConns.sort((a, b) => {
        const ta = components.find(c => c.id === a.to);
        const tb = components.find(c => c.id === b.to);
        return ta.load - tb.load;
      });
      conn = aliveConns[0];
    } else {
      conn = aliveConns[Math.floor(Math.random() * aliveConns.length)];
    }
  } else {
    conn = outConns[Math.floor(Math.random() * outConns.length)];
  }

  const target = components.find(c => c.id === conn.to);
  if (!target) return;

  simStats.total += weight;
  simPackets.push({
    x: source.x + 70, y: source.y + 35,
    fromId: source.id, toId: target.id,
    connIdx: connections.indexOf(conn),
    progress: 0, speed: (0.8 + Math.random() * 0.4) / (target.latency / 10),
    error: false, hops: [{id: source.id, time: simTime}],
    startTime: simTime, weight: weight
  });
  conn.active = true;
}

function updatePackets(dt) {
  for (let i = simPackets.length - 1; i >= 0; i--) {
    const pkt = simPackets[i];
    pkt.progress += dt * pkt.speed;
    const from = components.find(c => c.id === pkt.fromId);
    const to = components.find(c => c.id === pkt.toId);
    if (!from || !to) { simPackets.splice(i, 1); continue; }
    
    // Interpolate position along exact S-curve (Cubic Bezier)
    const fx = from.x + 70, fy = from.y + 35;
    const tx = to.x + 70, ty = to.y + 35;
    const dx = tx - fx, dy = ty - fy;
    
    const cp1x = fx + (Math.abs(dx) > Math.abs(dy) ? dx * 0.4 : 0);
    const cp1y = fy + (Math.abs(dy) >= Math.abs(dx) ? dy * 0.4 : 0);
    const cp2x = tx - (Math.abs(dx) > Math.abs(dy) ? dx * 0.4 : 0);
    const cp2y = ty - (Math.abs(dy) >= Math.abs(dx) ? dy * 0.4 : 0);
    
    const t = Math.min(1, pkt.progress);
    const u = 1 - t;
    
    // Calculate current position
    pkt.x = u*u*u*fx + 3*u*u*t*cp1x + 3*u*t*t*cp2x + t*t*t*tx;
    pkt.y = u*u*u*fy + 3*u*u*t*cp1y + 3*u*t*t*cp2y + t*t*t*ty;

    // Calculate trailing point to determine drawing angle
    const prevT = Math.max(0, t - 0.05);
    const pu = 1 - prevT;
    pkt.tailX = pu*pu*pu*fx + 3*pu*pu*prevT*cp1x + 3*pu*prevT*prevT*cp2x + prevT*prevT*prevT*tx;
    pkt.tailY = pu*pu*pu*fy + 3*pu*pu*prevT*cp1y + 3*pu*prevT*prevT*cp2y + prevT*prevT*prevT*ty;

    if (pkt.progress >= 1) {
      if (to.dead) {
        pkt.error = true;
        simStats.errors += pkt.weight;
        if (droppedPackets.length < 25) {
           droppedPackets.push({ x: pkt.x, y: pkt.y, spawnTime: simTime, msg: 'RIP', vx: (Math.random()-0.5)*80, vy: 30 + Math.random()*50 });
        }
        simPackets.splice(i, 1);
        continue;
      }
      if (to.load >= 99 && to.type !== 'client') {
        pkt.error = true;
        simStats.errors += pkt.weight;
        if (droppedPackets.length < 25) {
           droppedPackets.push({ x: pkt.x, y: pkt.y, spawnTime: simTime, msg: '503', vx: (Math.random()-0.5)*80, vy: 30 + Math.random()*50 });
        }
        simPackets.splice(i, 1);
        continue;
      }
      
      // Cache hit logic
      if (to.type === 'cache') {
        const hitRate = to.config?.hitRate || 85;
        const hit = (Math.random() * 100) < hitRate;
        if (hit) {
          simStats.success += pkt.weight;
          const lat = (simTime - pkt.startTime) * 1000;
          simStats.latency = simStats.latency === 0 ? lat : simStats.latency * 0.95 + lat * 0.05;
          simPackets.splice(i, 1);
          // Fixed cache load math so it properly registers CPU/Memory utilization
          to.load = Math.min(100, to.load + ((800 * pkt.weight) / Math.max(1, to.maxLoad)));
          continue;
        }
      }

      // Calculate processing load per packet. Logger nodes need higher multipliers to visibly register on their 50k maxLoad pools
      let weightMulti = 210;
      if (to.type === 'logger') weightMulti = 5000;
      
      to.load = Math.min(100, to.load + ((weightMulti * pkt.weight) / Math.max(1, to.maxLoad)));
      pkt.hops.push({ id: to.id, time: simTime });
      
      // Logger Intercept Logic (Observability)
      if (to.type === 'logger') {
         if (!window._lastLoggerTick || Date.now() - window._lastLoggerTick > 1000) {
            const level = to.config?.logLevel || 'TRACE (Full Payload)';
            const pid = currentProblem ? currentProblem.id : 0;
            let mockData = '{ "status": "ok" }';
            if (pid === 1) mockData = `{ "url": "https://google.com...", "origin": "${Math.random()>0.5?'US':'EU'}" }`;
            if (pid === 11) mockData = `{ "cart_id": "${Math.floor(Math.random()*9000)}", "total": "$${Math.floor(Math.random()*200)}" }`;
            
            addLog('info', `<span style="color:#aaaaaa;">[LOGGER NODE ${to.id}]</span> INTERCEPT ${level}: ${mockData}`);
            window._lastLoggerTick = Date.now();
         }
      }
      
      // Feature: Live Terminal Traffic Stream
      if (!window._lastLogTrace || Date.now() - window._lastLogTrace > 1200) {
        let logMsg = '';
        const ms = Math.floor(Math.random() * 80 + 12);
        const hash = Math.random().toString(36).substring(2, 8);
        const isDB = (to.type === 'sql-db' || to.type === 'nosql-db');
        const isCache = (to.type === 'cache');
        const pid = currentProblem ? currentProblem.id : 0;
        
        if (pid === 1) { // URL Shortener
           if (isDB) logMsg = `[DB WRITE] INSERT urls (hash, long_url) VALUES ('${hash}')`;
           else if (isCache) logMsg = `[CACHE HIT] GET sys.fg/${hash} (${ms}ms)`;
           else logMsg = Math.random() > 0.5 ? `[HTTP 201] POST /shorten -> sys.fg/${hash} (${ms}ms)` : `[HTTP 302] GET sys.fg/${hash} -> Redirecting (${ms}ms)`;
        } else if (pid === 2) { // WhatsApp
           if (isDB) logMsg = `[DB SYNC] Cassandra Write: msg_id_${hash}`;
           else logMsg = `[WSS 200] /chat/stream -> Delivered msg_${hash} (${ms}ms)`;
        } else if (pid === 11) { // Amazon / Flipkart
           if (isDB) logMsg = `[DB TXN] COMMIT Order_${hash} (ACID)`;
           else logMsg = `[HTTP 200] POST /checkout -> Validating Cart (${ms}ms)`;
        } else if (pid === 12) { // Ticketmaster
           if (isDB || isCache) logMsg = `[REDLOCK] Seat locked via TTL for user_${hash}`;
           else logMsg = `[HTTP 201] POST /book -> Reserving Ticket (${ms}ms)`;
        } else { // Generic
           if (isDB) logMsg = `[DB QUERY] SELECT * FROM records WHERE id='${hash}'`;
           else if (isCache) logMsg = `[CACHE HIT] GET payload_${hash} (${ms}ms)`;
           else logMsg = `[HTTP 200] GET /api/v1/data -> Node ${to.id} (${ms}ms)`;
        }
        
        addLog(isDB ? 'warning' : isCache ? 'info' : 'success', logMsg);
        window._lastLogTrace = Date.now();
      }

      // Find next hop
      const nextConns = connections.filter(c => c.from === to.id);
      if (nextConns.length === 0) {
        simStats.success += pkt.weight;
        const lat = (simTime - pkt.startTime) * 1000;
        simStats.latency = simStats.latency === 0 ? lat : simStats.latency * 0.95 + lat * 0.05;
        simPackets.splice(i, 1);
      } else {
        // Handle next hop routing (LB etc)
        let nc;
        if (to.type === 'load-balancer') {
          const healthy = nextConns.filter(c => {
             const t = components.find(comp => comp.id === c.to);
             return t && !t.dead;
          });
          if (healthy.length === 0) {
            pkt.error = true;
            simStats.errors += pkt.weight;
            if (droppedPackets.length < 25) {
               droppedPackets.push({ x: pkt.x, y: pkt.y, spawnTime: simTime, msg: '502', vx: (Math.random()-0.5)*80, vy: 30 + Math.random()*50 });
            }
            simPackets.splice(i, 1);
            continue;
          }
          const algo = to.config?.algorithm || 'Round Robin';
          if (algo === 'Round Robin') {
            to.lbCounter = (to.lbCounter || 0) % healthy.length;
            nc = healthy[to.lbCounter];
            to.lbCounter++;
          } else {
            nc = healthy[Math.floor(Math.random() * healthy.length)];
          }
        } else {
          nc = nextConns[Math.floor(Math.random() * nextConns.length)];
        }
        
        pkt.fromId = to.id;
        pkt.toId = nc.to;
        pkt.progress = 0;
        pkt.connIdx = connections.indexOf(nc);
        nc.active = true;
      }
    }
  }
}

function updateLoads(dt) {
  components.forEach(c => {
    if (c.dead) { c.load = 0; return; }
    c.load = Math.max(0, c.load - (c.load * 2.0 * dt) - (10 * dt)); // Dynamic scale tracking
    
    // Auto-scaling engine ticks
    if (c.load >= 99 && c.config?.autoScale) {
      if (!c._lastScaleTime || (simTime - c._lastScaleTime > 1.5)) {
        if (c.type === 'app-server' || c.type === 'web-server') {
           if (c.config.threads < 1000) {
              c.config.threads = Math.min(1000, c.config.threads + 100);
              applyComponentPerformance(c);
              c._lastScaleTime = simTime;
              addLog('success', `📈 [Auto-Scaler] Upscaled ${c.name} to ${c.config.threads} threads.`);
              showProperties(c); // refresh if active
           }
        } else if (c.type === 'microservice') {
           if (c.config.instances < 20) {
              c.config.instances = Math.min(20, c.config.instances + 2);
              applyComponentPerformance(c);
              c._lastScaleTime = simTime;
              addLog('success', `📈 [Auto-Scaler] Scaled ${c.name} cluster to ${c.config.instances} instances.`);
              showProperties(c);
           }
        }
      }
    }
  });
  // Deactivate connections
  connections.forEach(c => {
    if (!simPackets.some(p => p.connIdx === connections.indexOf(c))) c.active = false;
  });
}

function updateMetrics() {
  const throughputEl = document.getElementById('metricThroughput');
  const latencyEl = document.getElementById('metricLatency');
  const errorsEl = document.getElementById('metricErrors');
  const uptimeEl = document.getElementById('metricUptime');
  const tp = simStats.total > 0 ? Math.round(simStats.success / Math.max(1, simTime)) : 0;
  throughputEl.textContent = tp;
  throughputEl.className = 'metric-value ' + (tp > simRate * 0.7 ? 'good' : tp > simRate * 0.3 ? 'warn' : 'bad');
  const lat = Math.round(simStats.latency);
  latencyEl.textContent = lat;
  latencyEl.className = 'metric-value ' + (lat < 100 ? 'good' : lat < 300 ? 'warn' : 'bad');
  const errorRate = simStats.total > 0 ? ((simStats.errors / simStats.total) * 100).toFixed(1) : 0;
  errorsEl.textContent = errorRate + '%';
  errorsEl.className = 'metric-value ' + (errorRate < 1 ? 'good' : errorRate < 5 ? 'warn' : 'bad');
  
  const costEl = document.getElementById('metricCost');
  let totalCost = 0;
  components.forEach(c => {
    let base = 20; // Default base $20
    if (c.type === 'load-balancer' || c.type === 'api-gateway') base = 30;
    else if (c.type === 'sql-db') base = 120 * (c.config?.replication || 1);
    else if (c.type === 'nosql-db') base = 80 * (c.config?.nodes || 3);
    else if (c.type === 'app-server' || c.type === 'web-server') base = 40 * (c.config?.threads > 200 ? 2 : 1);
    else if (c.type === 'cache') base = 50;
    else if (c.type === 'microservice') base = 25 * (c.config?.instances || 3);
    else if (c.type === 'message-queue') base = 60 * (c.config?.shards || 3);
    else if (c.type === 'search') base = 100 * ((c.config?.replicas || 1) + 1);
    else if (c.type === 'cdn') base = 15;
    else if (c.type === 'waf') base = 45;
    else if (c.type === 'rate-limiter') base = 25;
    else if (c.type === 'zookeeper') base = 30 * (c.config?.quorum || 3);
    else if (c.type === 'stream-processing') base = 90 * (c.config?.workers || 5);
    else if (c.type === 'data-warehouse') base = 250 * (c.config?.nodes || 2);
    totalCost += base;
  });
  if (costEl) costEl.textContent = '$' + totalCost;
  
  // Update selected component props if visible
  if (selectedComponent) showProperties(selectedComponent);
}

// ---- Evaluation ----
// ---- Evaluation ----
// ---- Evaluation ----
function evaluateDesign() {
  if (!currentProblem) { addLog('error', 'Select a problem first!'); return; }
  
  const feedback = [];
  let score = 50; // Base score for effort
  let totalPoss = 100;
  
  // 1. Connectivity & Reachability Check (Graph traversal)
  const graph = {};
  components.forEach(c => graph[c.id] = []);
  connections.forEach(c => graph[c.from].push(c.to));
  
  const reachableIds = new Set();
  const clients = components.filter(c => c.type === 'client');
  
  function dfs(id) {
    if (reachableIds.has(id)) return;
    reachableIds.add(id);
    (graph[id] || []).forEach(dfs);
  }
  clients.forEach(c => dfs(c.id));
  
  const validCompTypes = new Set(
    components.filter(c => !c.dead && reachableIds.has(c.id)).map(c => c.type)
  );

  // Parameter 1: Architecture Completeness (40pts)
  let archMetCount = 0;
  currentProblem.requirements.forEach(r => {
    const met = r.needs.some(n => validCompTypes.has(n));
    if (met) {
      archMetCount++;
      feedback.push(`<div class="requirement-item met"><div class="req-check">✓</div><div class="req-text">✅ ${r.text}</div></div>`);
    } else {
      feedback.push(`<div class="requirement-item unmet"><div class="req-check"></div><div class="req-text">❌ ${r.text} (Missing or Unreachable)</div></div>`);
    }
  });
  score += (archMetCount / currentProblem.requirements.length) * 40;
  
  // Parameter 2: Reliability (SPOF) (10pts)
  const computers = components.filter(c => !c.dead && ['app-server', 'web-server', 'microservice'].includes(c.type));
  if (computers.length >= 2) {
    score += 5;
    feedback.push(`<div class="requirement-item met"><div class="req-check">✓</div><div class="req-text">🛡️ Compute Redundancy (No SPOF)</div></div>`);
  } else {
    feedback.push(`<div class="requirement-item unmet"><div class="req-check">!</div><div class="req-text">⚠️ Compute SPOF detected</div></div>`);
  }
  
  const dbConfigured = components.some(c => (c.type === 'sql-db' && c.config?.replication > 1) || (c.type === 'nosql-db' && c.config?.nodes > 1));
  if (dbConfigured) {
    score += 5;
    feedback.push(`<div class="requirement-item met"><div class="req-check">✓</div><div class="req-text">🛡️ Database Replication Configured</div></div>`);
  }

  // Parameter 3: Live Performance & Health (HEAVY PENALTY)
  const errorRate = simStats.total > 0 ? (simStats.errors / simStats.total) * 100 : 0;
  if (simRunning) {
    if (errorRate > 10) {
      score -= 40; // Heavy penalty for failing system
      feedback.push(`<div class="requirement-item unmet" style="color:#ff4466;"><div class="req-check">!</div><div class="req-text">🚨 CRITICAL: System is failing (${errorRate.toFixed(1)}% Error Rate)</div></div>`);
    } else if (errorRate > 1) {
      score -= 15;
      feedback.push(`<div class="requirement-item unmet" style="color:#ffaa00;"><div class="req-check">!</div><div class="req-text">⚠️ WARNING: Request drops detected (${errorRate.toFixed(1)}%)</div></div>`);
    } else {
      score += 10;
      feedback.push(`<div class="requirement-item met"><div class="req-check">✓</div><div class="req-text">📈 Healthy Throughput</div></div>`);
    }
    
    const overloaded = components.some(c => c.load > 95 && !c.dead);
    if (overloaded) {
      score -= 10;
      feedback.push(`<div class="requirement-item unmet"><div class="req-check">!</div><div class="req-text">⚠️ Bottleneck: Component(s) at max capacity</div></div>`);
    }
  } else if (!simRunning && simStats.total === 0) {
    score -= 10; // Not tested
    feedback.push(`<div class="requirement-item unmet"><div class="req-check">?</div><div class="req-text">⚠️ Design not tested under load</div></div>`);
  }

  const pct = Math.max(0, Math.min(100, Math.round(score)));
  const circle = document.getElementById('scoreCircle');
  circle.textContent = pct;
  circle.className = 'score-circle ' + (pct >= 90 ? 'excellent' : pct >= 70 ? 'good' : pct >= 50 ? 'fair' : 'poor');
  document.getElementById('scoreLabel').textContent = pct >= 90 ? 'Production Ready!' : pct >= 70 ? 'Good Architecture' : pct >= 50 ? 'Needs Improvement' : 'System Failure';
  document.getElementById('evalFeedback').innerHTML = feedback.join('');
  document.getElementById('evalModal').classList.add('show');
}

let advisorDismissed = false;

function showSystemAdvisor() {
  advisorDismissed = false;
  updateSystemAdvisor(true);
}

function updateSystemAdvisor(force = false) {
  if (!simRunning && !force) return;
  if (advisorDismissed && !force) return;
  
  // Hard throttle UI updates to 1 FPS to prevent DOM reflow thrashing
  if (!force && window._lastAdvisorTick && (Date.now() - window._lastAdvisorTick < 1000)) return;
  window._lastAdvisorTick = Date.now();
  
  const advisor = document.getElementById('systemAdvisor');
  const body = document.getElementById('advisorBody');
  let issues = [];
  let level = 'info';

  // Check for components maxed out
  const overloaded = components.filter(c => c.load > 90 && !c.dead);
  if (overloaded.length > 0) {
    level = 'warning';
    overloaded.forEach(c => {
      if (c.type === 'app-server' || c.type === 'web-server' || c.type === 'microservice') {
        issues.push({ text: `<b>${c.name}</b> compute resources exhausted (100% CPU lock).`, advice: "Advice: Provision additional horizontal nodes via scale-out or increment thread-pool allocation to prevent connection drops." });
      } else if (c.type === 'sql-db' || c.type === 'nosql-db') {
        issues.push({ text: `<b>${c.name}</b> disk I/O saturated (Query bottleneck).`, advice: "Advice: Implement a Redis caching layer upstream, enable partition sharding, or provision active read-replicas." });
      } else if (c.type === 'load-balancer' || c.type === 'api-gateway' || c.type === 'waf') {
        issues.push({ text: `<b>${c.name}</b> ingress compute layer failing under HTTP flood.`, advice: "Advice: Place a CDN <b>between the Users and this Gateway</b> to absorb traffic before it hits your servers, OR click this component and scale up its Maximum Capacity in the Properties tab." });
      } else if (c.type === 'stream-processing' || c.type === 'message-queue') {
        issues.push({ text: `<b>${c.name}</b> internal memory buffer backpressuring.`, advice: "Advice: Increase consumer worker/shard counts to consume the queue log faster." });
      } else {
        issues.push({ text: `<b>${c.name}</b> is critically bottlenecking.`, advice: "Advice: Scale out horizontal instances or upgrade hardware tiers immediately." });
      }
    });
  }

  // Check for errors
  const errorRate = simStats.total > 0 ? (simStats.errors / simStats.total) * 100 : 0;
  if (errorRate > 15) {
    level = 'danger';
    issues.push({ text: `🚨 Cascading Failure: <b>${errorRate.toFixed(1)}%</b> requests resulting in 502/503.`, advice: "Advice: The architecture is experiencing catastrophic failure. Isolate failing nodes via Circuit Breakers or aggressively auto-scale." });
  } else if (errorRate > 2) {
    level = 'danger';
    issues.push({ text: `⚠️ Packet Loss: <b>${errorRate.toFixed(1)}%</b> requests dropping.`, advice: "Advice: Bottleneck queues are full. Review upstream nodes and provision additional capacity." });
  }

  if (issues.length === 0 && force) {
     issues.push({ text: "System architecture looks healthy and stable!", advice: "Advice: You can run a Stress Test to check limits." });
     level = 'info';
  }

  if (issues.length > 0) {
    advisor.style.display = 'block';
    body.className = 'advisor-body ' + level;
    body.innerHTML = issues.map(i => `<div>${i.text}</div><div class="advisor-advice" style="margin-top:4px;">${i.advice}</div>`).join('<hr style="border:0;border-top:1px solid rgba(255,255,255,0.05);margin:10px 0;">');
    window._advisorLastActive = Date.now();
  } else {
    // Hysteresis to prevent flickering: only hide if it's been 5 seconds since the last issue, OR if system is cooling down.
    const timeSinceFix = Date.now() - (window._advisorLastActive || 0);
    const hasSimmeringNodes = components.some(c => c.load > 75);
    
    if (advisor.style.display === 'block' && !force) {
      if (hasSimmeringNodes || timeSinceFix < 4000) {
        // Hold the display stable while it cools down to prevent annoying pops
        body.className = 'advisor-body info';
        body.innerHTML = `<div style="color:var(--text-light); opacity:0.8;">System load is stabilizing...</div>`;
      } else {
        advisor.style.display = 'none';
      }
    } else if (force) {
       advisor.style.display = 'none';
    }
  }
}

function hideAdvisor() {
  advisorDismissed = true;
  document.getElementById('systemAdvisor').style.display = 'none';
}

function closeModal() { document.getElementById('evalModal').classList.remove('show'); }

// ---- Pre-built Example Architectures ----
const EXAMPLES = {
  1: { // URL Shortener
    components: [
      { type:'client',        x:50,   y:180, name:'Users' },
      { type:'api-gateway',   x:250,  y:180, name:'API Gateway' },
      { type:'load-balancer', x:450,  y:180, name:'Load Balancer' },
      { type:'app-server',    x:650,  y:80,  name:'App Server 1' },
      { type:'app-server',    x:650,  y:280, name:'App Server 2' },
      { type:'cache',         x:880,  y:80,  name:'Redis Cache' },
      { type:'sql-db',        x:880,  y:280, name:'MySQL DB' },
    ],
    connections: [
      [0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[3,6],[4,6],[5,6]
    ]
  },
  2: { // Chat Messaging
    components: [
      { type:'client',        x:50,   y:200, name:'Chat Client' },
      { type:'api-gateway',   x:230,  y:200, name:'API Gateway' },
      { type:'load-balancer', x:420,  y:200, name:'Load Balancer' },
      { type:'web-server',    x:610,  y:80,  name:'WebSocket Server 1' },
      { type:'web-server',    x:610,  y:320, name:'WebSocket Server 2' },
      { type:'message-queue', x:820,  y:200, name:'Kafka Queue' },
      { type:'nosql-db',      x:1020, y:120, name:'MongoDB Messages' },
      { type:'cache',         x:1020, y:300, name:'Redis Sessions' },
      { type:'notification',  x:820,  y:400, name:'Push Notifications' },
    ],
    connections: [
      [0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[5,6],[5,7],[5,8]
    ]
  },
  3: { // Instagram
    components: [
      { type:'client',         x:30,  y:200, name:'Mobile App' },
      { type:'cdn',            x:230, y:50,  name:'Image CDN' },
      { type:'api-gateway',    x:230, y:200, name:'API Gateway' },
      { type:'load-balancer',  x:430, y:200, name:'Load Balancer' },
      { type:'app-server',     x:630, y:120, name:'API Server 1' },
      { type:'app-server',     x:630, y:280, name:'API Server 2' },
      { type:'object-storage', x:860, y:50,  name:'S3 Images' },
      { type:'sql-db',         x:860, y:200, name:'PostgreSQL' },
      { type:'cache',          x:860, y:340, name:'Feed Cache' },
      { type:'message-queue',  x:1060, y:200, name:'Async Queue' },
    ],
    connections: [
      [0,1],[0,2],[2,3],[3,4],[3,5],[4,6],[5,6],[4,7],[5,7],[4,8],[5,8],[7,9]
    ]
  },
  4: { // Twitter
    components: [
      { type:'client',        x:30,  y:200, name:'Twitter Client' },
      { type:'cdn',           x:200, y:40,  name:'Static CDN' },
      { type:'load-balancer', x:200, y:200, name:'Load Balancer' },
      { type:'api-gateway',   x:380, y:200, name:'API Gateway' },
      { type:'app-server',    x:560, y:100, name:'Tweet Service' },
      { type:'app-server',    x:560, y:300, name:'Timeline Service' },
      { type:'cache',         x:750, y:40,  name:'Timeline Cache' },
      { type:'nosql-db',      x:750, y:180, name:'Tweets DB' },
      { type:'message-queue', x:750, y:320, name:'Fan-out Queue' },
      { type:'search',        x:940, y:180, name:'ElasticSearch' },
    ],
    connections: [
      [0,1],[0,2],[2,3],[3,4],[3,5],[4,6],[4,7],[5,6],[5,7],[4,8],[8,9],[7,9]
    ]
  },
  5: { // Netflix
    components: [
      { type:'client',         x:30,  y:200, name:'Video Player' },
      { type:'dns',            x:200, y:40,  name:'DNS Router' },
      { type:'cdn',            x:200, y:360, name:'Edge CDN' },
      { type:'api-gateway',    x:380, y:200, name:'API Gateway' },
      { type:'load-balancer',  x:560, y:200, name:'Load Balancer' },
      { type:'app-server',     x:760, y:120, name:'Catalog Service' },
      { type:'app-server',     x:760, y:300, name:'Streaming Service' },
      { type:'object-storage', x:960, y:40,  name:'Video Storage' },
      { type:'sql-db',         x:960, y:200, name:'Metadata DB' },
      { type:'message-queue',  x:960, y:360, name:'Transcode Queue' },
      { type:'cache',          x:1140, y:120, name:'Reco Cache' },
    ],
    connections: [
      [0,1],[0,2],[1,3],[3,4],[4,5],[4,6],[5,7],[6,7],[5,8],[6,8],[6,9],[9,7],[5,10]
    ]
  },
  6: { // Uber
    components: [
      { type:'client',        x:30,  y:120, name:'Rider App' },
      { type:'client',        x:30,  y:300, name:'Driver App' },
      { type:'load-balancer', x:220, y:200, name:'Load Balancer' },
      { type:'api-gateway',   x:400, y:200, name:'API Gateway' },
      { type:'microservice',  x:590, y:80,  name:'Matching Engine' },
      { type:'app-server',    x:590, y:250, name:'Trip Service' },
      { type:'cache',         x:590, y:400, name:'Location Cache' },
      { type:'nosql-db',      x:790, y:80,  name:'Trips DB' },
      { type:'message-queue', x:790, y:250, name:'Event Queue' },
      { type:'notification',  x:790, y:400, name:'Push Notify' },
    ],
    connections: [
      [0,2],[1,2],[2,3],[3,4],[3,5],[3,6],[4,7],[5,7],[5,8],[8,9],[1,6]
    ]
  },
  7: { // Distributed Rate Limiter
    components: [
      { type:'client',        x:50,  y:200, name:'API Clients' },
      { type:'api-gateway',   x:250, y:200, name:'API Gateway' },
      { type:'rate-limiter',  x:450, y:80,  name:'Rate Limit Rules' },
      { type:'cache',         x:450, y:300, name:'Redis Token Store' },
      { type:'load-balancer', x:650, y:200, name:'Internal LB' },
      { type:'app-server',    x:850, y:120, name:'Backend API 1' },
      { type:'app-server',    x:850, y:280, name:'Backend API 2' },
    ],
    connections: [
      [0,1],[1,2],[1,3],[2,3],[1,4],[4,5],[4,6]
    ]
  },
  8: { // Web Crawler
    components: [
      { type:'message-queue', x:50,  y:200, name:'URL Frontier Queue' },
      { type:'dns',           x:250, y:50,  name:'DNS Cache' },
      { type:'app-server',    x:250, y:200, name:'Download Workers' },
      { type:'object-storage',x:250, y:350, name:'HTML Blob Storage' },
      { type:'microservice',  x:500, y:200, name:'Link Extractor' },
      { type:'message-queue', x:750, y:100, name:'Indexing Queue' },
      { type:'search',        x:1000,y:100, name:'ElasticSearch' }
    ],
    connections: [
      [0,2],[2,1],[2,3],[2,4],[4,0],[4,5],[5,6]
    ]
  },
  9: { // Key Value Store
    components: [
      { type:'client',        x:50,  y:200, name:'Application Node' },
      { type:'zookeeper',     x:250, y:50,  name:'Zookeeper Config' },
      { type:'cache',         x:400, y:200, name:'Hash Ring Node 1' },
      { type:'cache',         x:600, y:100, name:'Hash Ring Node 2' },
      { type:'cache',         x:600, y:300, name:'Hash Ring Node 3' },
      { type:'object-storage',x:850, y:200, name:'AOF Backup Storage' }
    ],
    connections: [
      [0,1],[1,2],[1,3],[1,4],[0,2],[0,3],[0,4],[2,3],[3,4],[4,2],[2,5],[3,5],[4,5]
    ]
  },
  10: { // Yelp Proximity
    components: [
      { type:'client',        x:50,  y:200, name:'Mobile User' },
      { type:'api-gateway',   x:250, y:200, name:'API Gateway' },
      { type:'load-balancer', x:450, y:200, name:'Load Balancer' },
      { type:'app-server',    x:650, y:120, name:'QuadTree Search' },
      { type:'app-server',    x:650, y:280, name:'Business Details' },
      { type:'cache',         x:850, y:120, name:'Geohash Cache' },
      { type:'sql-db',        x:850, y:280, name:'Read-Replica DB' }
    ],
    connections: [
      [0,1],[1,2],[2,3],[2,4],[3,5],[3,6],[4,6],[5,6]
    ]
  },
  11: {
    components: [
      {type:'client', x:50, y:200, name:"Web & Mobile Clients"},
      {type:'cdn', x:200, y:50, name:"CloudFront Images"},
      {type:'api-gateway', x:250, y:200, name:"API Gateway"},
      {type:'microservice', x:450, y:120, name:"Catalog Read (CQRS)"},
      {type:'microservice', x:450, y:300, name:"Order/Checkout (Saga)"},
      {type:'cache', x:650, y:120, name:"Redis (Cart/Hot Products)"},
      {type:'message-queue', x:450, y:450, name:"Kafka (Order Events)"},
      {type:'sql-db', x:650, y:300, name:"PostgreSQL (ACID Orders)"},
      {type:'search', x:650, y:50, name:"ElasticSearch Catalog"}
    ],
    connections: [
      [0,1], [0,2], [2,3], [2,4],
      [3,5], [3,8], [4,5], [4,6], [4,7], [6,7]
    ]
  },
  12: {
    components: [
      {type:'client', x:50, y:200, name:"Fan Connections"},
      {type:'load-balancer', x:250, y:200, name:"L4 Load Balancer"},
      {type:'app-server', x:450, y:200, name:"Booking Service"},
      {type:'cache', x:650, y:100, name:"Redis (Distributed Locks)"},
      {type:'message-queue', x:450, y:350, name:"Waitlist Queue"},
      {type:'sql-db', x:650, y:300, name:"SQL DB (Seat Maps)"}
    ],
    connections: [
      [0,1], [1,2], [2,3], [2,4], [2,5], [4,2]
    ]
  }
};

function loadExample() {
  if (!currentProblem) { addLog('error', 'Select a problem first!'); return; }
  const example = EXAMPLES[currentProblem.id];
  if (!example) { addLog('error', 'No example available.'); return; }
  
  stopSimulation();
  components = [];
  connections = [];
  selectedComponent = null;
  nextCompId = 1;
  
  example.components.forEach(ec => {
    const def = COMP_DEFS[ec.type];
    const config = {};
    if (CONFIG_DEFS[ec.type]) {
      CONFIG_DEFS[ec.type].forEach(field => {
        config[field.key] = field.default;
      });
    }
    const compobj = {
      id: nextCompId++,
      type: ec.type,
      x: ec.x,
      y: ec.y,
      name: ec.name || def.label,
      load: 0,
      dead: false,
      latency: def.latency,
      maxLoad: def.maxLoad,
      config: config
    };
    applyComponentPerformance(compobj);
    components.push(compobj);
  });
  
  example.connections.forEach(([fromIdx, toIdx]) => {
    connections.push({
      from: components[fromIdx].id,
      to: components[toIdx].id,
      active: false
    });
  });
  
  updateRequirementsList();
  updateMetrics();
  renderCanvas();
  addLog('success', `📦 Loaded example: ${currentProblem.title}`);
}
renderProblems();

// ============================================
// AUTHENTICATION LOGIC (Firebase Real Cloud)
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyDXb6DZsvEnXdov3I20sjaHCX1au9-qut0",
  authDomain: "systemforge-5269d.firebaseapp.com",
  projectId: "systemforge-5269d",
  storageBucket: "systemforge-5269d.firebasestorage.app",
  messagingSenderId: "1018107667228",
  appId: "1:1018107667228:web:cbfd3550a301e6dfa450d9",
  measurementId: "G-Q41X253W4G"
};

// Initialize Firebase SDK
firebase.initializeApp(firebaseConfig);

let authMode = 'login'; // 'login' or 'signup'

function toggleAuthMode(mode) {
  authMode = mode;
  document.getElementById('authErrorMsg').innerText = '';
  
  if (mode === 'login') {
    document.getElementById('tabLogin').classList.add('active');
    document.getElementById('tabSignup').classList.remove('active');
    document.getElementById('tabSignup').style.opacity = '0.6';
    document.getElementById('tabLogin').style.opacity = '1';
    
    document.getElementById('authName').style.display = 'none';
    document.getElementById('authName').required = false;
    document.getElementById('authSubmitBtn').innerText = 'Log In';
  } else {
    document.getElementById('tabSignup').classList.add('active');
    document.getElementById('tabLogin').classList.remove('active');
    document.getElementById('tabLogin').style.opacity = '0.6';
    document.getElementById('tabSignup').style.opacity = '1';
    
    document.getElementById('authName').style.display = 'block';
    document.getElementById('authName').required = true;
    document.getElementById('authSubmitBtn').innerText = 'Create Account';
  }
}

function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;
  const name = document.getElementById('authName').value;
  const errorMsg = document.getElementById('authErrorMsg');
  const btn = document.getElementById('authSubmitBtn');
  
  if (authMode === 'signup') {
    if (password.length < 6) {
      errorMsg.innerText = 'Password must be at least 6 characters.';
      return;
    }
    btn.innerText = 'Creating account...';
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({ displayName: name }).then(() => {
          // Send verification email
          userCredential.user.sendEmailVerification().then(() => {
            console.log("Verification email sent.");
            alert("Success! A confirmation email has been sent to " + email + ". Please check your inbox!");
          });
          loginSuccess();
        });
      })
      .catch((error) => {
        errorMsg.innerText = error.message;
        btn.innerText = 'Create Account';
      });
      
  } else {
    btn.innerText = 'Logging in...';
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        loginSuccess();
      })
      .catch((error) => {
        errorMsg.innerText = "Invalid credentials. Please try again or create an account.";
        btn.innerText = 'Log In';
      });
  }
}

function loginSuccess() {
  document.getElementById('authErrorMsg').innerText = '';
  document.getElementById('page-auth').classList.remove('active');
  document.getElementById('page-dashboard').classList.add('active');
  document.getElementById('mainNav').style.display = 'flex';
  showPage('dashboard');
  
  // Revert button logic visually
  if (authMode === 'signup') document.getElementById('authSubmitBtn').innerText = 'Create Account';
  else document.getElementById('authSubmitBtn').innerText = 'Log In';
}

function logoutUser() {
  firebase.auth().signOut().then(() => {
    document.getElementById('mainNav').style.display = 'none';
    showPage('auth');
  }).catch((error) => {
    console.error("Sign Out Error", error);
  });
}

// Auto-login check on page load via Firebase SDK Listener
window.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginSuccess();
    } else {
      showPage('auth');
    }
  });
});

// ============================================
// UI COLLAPSE TOGGLES
// ============================================
function toggleLeftPanel() {
  const ws = document.querySelector('.workspace');
  ws.classList.toggle('left-collapsed');
  document.getElementById('leftToggleIcon').textContent = ws.classList.contains('left-collapsed') ? '▶' : '◀';
  
  // Smoothly resize canvas during CSS grid transition
  let start = performance.now();
  requestAnimationFrame(function anim(time) {
    resizeCanvas();
    if (time - start < 350) requestAnimationFrame(anim);
  });
}

function toggleRightPanel() {
  const ws = document.querySelector('.workspace');
  ws.classList.toggle('right-collapsed');
  document.getElementById('rightToggleIcon').textContent = ws.classList.contains('right-collapsed') ? '◀' : '▶';
  
  // Smoothly resize canvas during CSS grid transition
  let start = performance.now();
  requestAnimationFrame(function anim(time) {
    resizeCanvas();
    if (time - start < 350) requestAnimationFrame(anim);
  });
}
