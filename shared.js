// ============================================================
//  SHORTCUT'S SKIN CARE SPA — localStorage Database v4.0
//  Expanded seed data · Analytics · Loyalty · Notifications
// ============================================================

const DB_KEYS = {
  ACCOUNTS: 'spa_accounts', CLIENTS: 'spa_clients',
  APPOINTMENTS: 'spa_appointments', SERVICES: 'spa_services',
  INCOME: 'spa_income', AUDIT: 'spa_audit',
  SESSION: 'spa_session', IDS: 'spa_next_ids',
  NOTIFICATIONS: 'spa_notifications', LOYALTY: 'spa_loyalty',
  REVIEWS: 'spa_reviews',
};

const SEED = {
  accounts: [
    { id: 'adm001', role: 'admin', name: 'Shortcut Admin', email: 'admin@shortcut.spa', password: 'admin123' },
    { id: 'cli001', role: 'client', name: 'Maria Dela Cruz', email: 'maria@email.com', password: 'maria123', phone: '09171234567' },
    { id: 'cli002', role: 'client', name: 'Ana Reyes',        email: 'ana@email.com',   password: 'ana123',   phone: '09281234567' },
    { id: 'cli003', role: 'client', name: 'Joy Santos',       email: 'joy@email.com',   password: 'joy123',   phone: '09391234567' },
    { id: 'cli004', role: 'client', name: 'Camille Torres',   email: 'camille@email.com', password: 'camille123', phone: '09501234567' },
    { id: 'cli005', role: 'client', name: 'Bianca Lim',       email: 'bianca@email.com',  password: 'bianca123',  phone: '09621234567' },
    { id: 'cli006', role: 'client', name: 'Trisha Morales',   email: 'trisha@email.com',  password: 'trisha123',  phone: '09731234567' },
    { id: 'cli007', role: 'client', name: 'Sophia Garcia',    email: 'sophia@email.com',  password: 'sophia123',  phone: '09841234567' },
    { id: 'cli008', role: 'client', name: 'Nicole Villanueva',email: 'nicole@email.com',  password: 'nicole123',  phone: '09951234567' },
    { id: 'emp001', role: 'employee', name: 'Maria Santos',  email: 'msantos@shortcut.spa', password: 'emp123' },
    { id: 'emp002', role: 'employee', name: 'Ana Reyes',     email: 'areyes@shortcut.spa',  password: 'emp123' },
    { id: 'emp003', role: 'employee', name: 'Joy Cruz',      email: 'jcruz@shortcut.spa',   password: 'emp123' },
    { id: 'emp004', role: 'employee', name: 'Karen Bautista',email: 'kbautista@shortcut.spa',password: 'emp123' },
  ],
  services: [
    { id: 's01', name: 'Facial Care',      category: 'Facial',    duration: 60, price: 500,  desc: 'Deep cleansing facial for radiant, healthy skin.', active: true },
    { id: 's02', name: 'Underarm Care',    category: 'Body',      duration: 45, price: 350,  desc: 'Brightening and whitening treatment for smooth underarms.', active: true },
    { id: 's03', name: 'Eyebrow Shaping',  category: 'Lash & Brow', duration: 30, price: 200, desc: 'Professional eyebrow threading and precision shaping.', active: true },
    { id: 's04', name: 'Eyelash Service',  category: 'Lash & Brow', duration: 60, price: 400, desc: 'Lash lift and tint for dramatic, longer-looking eyes.', active: true },
    { id: 's05', name: 'Wax Service',      category: 'Body',      duration: 45, price: 300,  desc: 'Full body or targeted area waxing for silky smooth skin.', active: true },
    { id: 's06', name: 'Glutathione Shot', category: 'Wellness',  duration: 15, price: 800,  desc: 'IV glutathione shot for fast skin brightening results.', active: true },
    { id: 's07', name: 'Glutathione Drip', category: 'Wellness',  duration: 90, price: 2500, desc: 'Full IV glutathione drip therapy for whole-body glow.', active: true },
    { id: 's08', name: 'Manicure',         category: 'Nails',     duration: 45, price: 250,  desc: 'Nail shaping, cuticle care, and your choice of polish.', active: true },
    { id: 's09', name: 'Pedicure',         category: 'Nails',     duration: 45, price: 250,  desc: 'Relaxing foot soak, nail care, and massage.', active: true },
    { id: 's10', name: 'Mani & Pedi',      category: 'Nails',     duration: 90, price: 450,  desc: 'Full manicure and pedicure combo package.', active: true },
    { id: 's11', name: 'Hydra Facial',     category: 'Facial',    duration: 75, price: 1200, desc: 'Advanced HydraFacial treatment with serum infusion.', active: true },
    { id: 's12', name: 'Body Scrub',       category: 'Body',      duration: 60, price: 650,  desc: 'Full-body exfoliating scrub for silky smooth skin.', active: true },
    { id: 's13', name: 'Lip Tint',         category: 'Facial',    duration: 20, price: 150,  desc: 'Long-lasting lip tint for a natural flush of color.', active: true },
    { id: 's14', name: 'Nail Art',         category: 'Nails',     duration: 60, price: 350,  desc: 'Custom nail art designs for any occasion.', active: true },
    { id: 's15', name: 'Lash Extensions', category: 'Lash & Brow', duration: 90, price: 1500, desc: 'Individual lash extension application for full, lush lashes.', active: true },
  ],
  appointments: [
    // TODAY (Feb 27)
    { id: 'a001', clientId: 'cli001', clientName: 'Maria Dela Cruz',    phone: '09171234567', service: 'Facial Care',      date: '2026-02-27', time: '09:00', therapist: 'Maria Santos', status: 'confirmed',  notes: 'Sensitive skin', createdAt: '2026-02-20T09:00:00Z' },
    { id: 'a002', clientId: 'cli002', clientName: 'Ana Reyes',          phone: '09281234567', service: 'Mani & Pedi',      date: '2026-02-27', time: '10:00', therapist: 'Ana Reyes',    status: 'confirmed',  notes: '', createdAt: '2026-02-21T10:00:00Z' },
    { id: 'a003', clientId: 'cli003', clientName: 'Joy Santos',         phone: '09391234567', service: 'Glutathione Drip', date: '2026-02-27', time: '13:00', therapist: 'Joy Cruz',     status: 'pending',    notes: '', createdAt: '2026-02-21T11:00:00Z' },
    { id: 'a004', clientId: 'cli004', clientName: 'Camille Torres',     phone: '09501234567', service: 'Eyelash Service',  date: '2026-02-27', time: '14:00', therapist: 'Karen Bautista',status:'pending',   notes: 'First time', createdAt: '2026-02-22T10:00:00Z' },
    { id: 'a005', clientId: 'cli001', clientName: 'Maria Dela Cruz',    phone: '09171234567', service: 'Underarm Care',    date: '2026-02-27', time: '16:00', therapist: 'Maria Santos', status: 'confirmed',  notes: '', createdAt: '2026-02-22T11:00:00Z' },
    // YESTERDAY (Feb 26)
    { id: 'a006', clientId: 'cli005', clientName: 'Bianca Lim',         phone: '09621234567', service: 'Hydra Facial',     date: '2026-02-26', time: '10:00', therapist: 'Maria Santos', status: 'completed',  notes: 'Wants deep hydration', createdAt: '2026-02-20T09:00:00Z' },
    { id: 'a007', clientId: 'cli006', clientName: 'Trisha Morales',     phone: '09731234567', service: 'Nail Art',         date: '2026-02-26', time: '11:00', therapist: 'Ana Reyes',    status: 'completed',  notes: 'Floral design', createdAt: '2026-02-21T10:00:00Z' },
    { id: 'a008', clientId: 'cli002', clientName: 'Ana Reyes',          phone: '09281234567', service: 'Eyebrow Shaping',  date: '2026-02-26', time: '14:00', therapist: 'Joy Cruz',     status: 'completed',  notes: '', createdAt: '2026-02-21T11:00:00Z' },
    { id: 'a009', clientId: 'cli007', clientName: 'Sophia Garcia',      phone: '09841234567', service: 'Lash Extensions',  date: '2026-02-26', time: '15:00', therapist: 'Karen Bautista',status:'completed',  notes: '', createdAt: '2026-02-22T10:00:00Z' },
    // PAST WEEK
    { id: 'a010', clientId: 'cli003', clientName: 'Joy Santos',         phone: '09391234567', service: 'Facial Care',      date: '2026-02-25', time: '09:00', therapist: 'Maria Santos', status: 'completed',  notes: 'Oily skin', createdAt: '2026-02-15T09:00:00Z' },
    { id: 'a011', clientId: 'cli001', clientName: 'Maria Dela Cruz',    phone: '09171234567', service: 'Glutathione Shot',  date: '2026-02-25', time: '11:00', therapist: 'Joy Cruz',     status: 'completed',  notes: '', createdAt: '2026-02-18T08:00:00Z' },
    { id: 'a012', clientId: 'cli008', clientName: 'Nicole Villanueva',  phone: '09951234567', service: 'Body Scrub',       date: '2026-02-25', time: '14:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-02-19T14:00:00Z' },
    { id: 'a013', clientId: 'cli004', clientName: 'Camille Torres',     phone: '09501234567', service: 'Manicure',         date: '2026-02-24', time: '10:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-02-19T09:00:00Z' },
    { id: 'a014', clientId: 'cli005', clientName: 'Bianca Lim',         phone: '09621234567', service: 'Wax Service',      date: '2026-02-24', time: '13:00', therapist: 'Maria Santos', status: 'completed',  notes: '', createdAt: '2026-02-20T09:00:00Z' },
    { id: 'a015', clientId: 'cli006', clientName: 'Trisha Morales',     phone: '09731234567', service: 'Pedicure',         date: '2026-02-23', time: '11:00', therapist: 'Joy Cruz',     status: 'completed',  notes: '', createdAt: '2026-02-18T11:00:00Z' },
    { id: 'a016', clientId: 'cli007', clientName: 'Sophia Garcia',      phone: '09841234567', service: 'Glutathione Shot', date: '2026-02-23', time: '15:00', therapist: 'Joy Cruz',     status: 'completed',  notes: '', createdAt: '2026-02-20T10:00:00Z' },
    { id: 'a017', clientId: 'cli003', clientName: 'Joy Santos',         phone: '09391234567', service: 'Eyelash Service',  date: '2026-02-22', time: '10:00', therapist: 'Karen Bautista',status:'completed',  notes: '', createdAt: '2026-02-18T09:00:00Z' },
    { id: 'a018', clientId: 'cli002', clientName: 'Ana Reyes',          phone: '09281234567', service: 'Wax Service',      date: '2026-02-21', time: '15:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-02-17T14:00:00Z' },
    // CANCELLED
    { id: 'a019', clientId: 'cli008', clientName: 'Nicole Villanueva',  phone: '09951234567', service: 'Facial Care',      date: '2026-02-22', time: '09:00', therapist: 'Maria Santos', status: 'cancelled',  notes: '', createdAt: '2026-02-18T08:00:00Z' },
    // OLDER HISTORY
    { id: 'a020', clientId: 'cli001', clientName: 'Maria Dela Cruz',    phone: '09171234567', service: 'Hydra Facial',     date: '2026-02-20', time: '10:00', therapist: 'Maria Santos', status: 'completed',  notes: '', createdAt: '2026-02-14T09:00:00Z' },
    { id: 'a021', clientId: 'cli003', clientName: 'Joy Santos',         phone: '09391234567', service: 'Glutathione Drip', date: '2026-02-15', time: '13:00', therapist: 'Joy Cruz',     status: 'completed',  notes: '', createdAt: '2026-02-10T10:00:00Z' },
    { id: 'a022', clientId: 'cli001', clientName: 'Maria Dela Cruz',    phone: '09171234567', service: 'Mani & Pedi',      date: '2026-02-10', time: '11:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-02-05T09:00:00Z' },
    { id: 'a023', clientId: 'cli005', clientName: 'Bianca Lim',         phone: '09621234567', service: 'Lash Extensions',  date: '2026-02-08', time: '14:00', therapist: 'Karen Bautista',status:'completed',  notes: '', createdAt: '2026-02-03T11:00:00Z' },
    { id: 'a024', clientId: 'cli007', clientName: 'Sophia Garcia',      phone: '09841234567', service: 'Body Scrub',       date: '2026-02-06', time: '10:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-02-01T10:00:00Z' },
    { id: 'a025', clientId: 'cli004', clientName: 'Camille Torres',     phone: '09501234567', service: 'Nail Art',         date: '2026-02-05', time: '11:00', therapist: 'Ana Reyes',    status: 'completed',  notes: '', createdAt: '2026-01-31T10:00:00Z' },
    // UPCOMING
    { id: 'a026', clientId: 'cli006', clientName: 'Trisha Morales',     phone: '09731234567', service: 'Hydra Facial',     date: '2026-03-01', time: '10:00', therapist: 'Maria Santos', status: 'pending',    notes: '', createdAt: '2026-02-25T09:00:00Z' },
    { id: 'a027', clientId: 'cli008', clientName: 'Nicole Villanueva',  phone: '09951234567', service: 'Lash Extensions',  date: '2026-03-02', time: '14:00', therapist: 'Karen Bautista',status:'confirmed',  notes: '', createdAt: '2026-02-25T10:00:00Z' },
    { id: 'a028', clientId: 'cli002', clientName: 'Ana Reyes',          phone: '09281234567', service: 'Glutathione Drip', date: '2026-03-03', time: '13:00', therapist: 'Joy Cruz',     status: 'pending',    notes: '', createdAt: '2026-02-26T09:00:00Z' },
  ],
  clients: [
    { id: 'cli001', name: 'Maria Dela Cruz',    phone: '09171234567', email: 'maria@email.com',   visits: 12, totalSpent: 8750,  joinDate: '2025-04-10', lastVisit: '2026-02-27', loyaltyPts: 875 },
    { id: 'cli002', name: 'Ana Reyes',          phone: '09281234567', email: 'ana@email.com',     visits: 7,  totalSpent: 3600,  joinDate: '2025-07-20', lastVisit: '2026-02-27', loyaltyPts: 360 },
    { id: 'cli003', name: 'Joy Santos',         phone: '09391234567', email: 'joy@email.com',     visits: 18, totalSpent: 15800, joinDate: '2025-01-15', lastVisit: '2026-02-25', loyaltyPts: 1580 },
    { id: 'cli004', name: 'Camille Torres',     phone: '09501234567', email: 'camille@email.com', visits: 5,  totalSpent: 2350,  joinDate: '2025-09-05', lastVisit: '2026-02-24', loyaltyPts: 235 },
    { id: 'cli005', name: 'Bianca Lim',         phone: '09621234567', email: 'bianca@email.com',  visits: 9,  totalSpent: 6200,  joinDate: '2025-06-12', lastVisit: '2026-02-24', loyaltyPts: 620 },
    { id: 'cli006', name: 'Trisha Morales',     phone: '09731234567', email: 'trisha@email.com',  visits: 6,  totalSpent: 2900,  joinDate: '2025-08-30', lastVisit: '2026-02-26', loyaltyPts: 290 },
    { id: 'cli007', name: 'Sophia Garcia',      phone: '09841234567', email: 'sophia@email.com',  visits: 11, totalSpent: 7400,  joinDate: '2025-03-22', lastVisit: '2026-02-26', loyaltyPts: 740 },
    { id: 'cli008', name: 'Nicole Villanueva',  phone: '09951234567', email: 'nicole@email.com',  visits: 4,  totalSpent: 2000,  joinDate: '2025-11-01', lastVisit: '2026-02-25', loyaltyPts: 200 },
  ],
  // 4 weeks of daily income (28 days of Feb)
  income: [
    1200, 850, 1500, 0, 2300, 1800, 900,   // Week 1
    1100, 1400, 2100, 0, 1750, 2500, 1300, // Week 2
    950,  1650, 2200, 0, 3100, 1900, 1200, // Week 3
    800,  1450, 1900, 0, 2800, 2100, 3500  // Week 4 (Feb 27 = 3500 target)
  ],
  reviews: [
    { id: 'r01', clientId: 'cli001', clientName: 'Maria Dela Cruz', service: 'Facial Care', rating: 5, text: 'Amazing! My skin felt so fresh after the facial.', date: '2026-02-20' },
    { id: 'r02', clientId: 'cli003', clientName: 'Joy Santos', service: 'Glutathione Drip', rating: 5, text: 'Visible glow after just one session!', date: '2026-02-16' },
    { id: 'r03', clientId: 'cli005', clientName: 'Bianca Lim', service: 'Hydra Facial', rating: 5, text: 'Best facial I\'ve ever had. Highly recommend!', date: '2026-02-22' },
    { id: 'r04', clientId: 'cli007', clientName: 'Sophia Garcia', service: 'Lash Extensions', rating: 4, text: 'Beautiful lashes, will definitely come back.', date: '2026-02-27' },
    { id: 'r05', clientId: 'cli002', clientName: 'Ana Reyes', service: 'Mani & Pedi', rating: 5, text: 'Love the service! Staff is very professional.', date: '2026-02-15' },
  ],
  notifications: [
    { id: 'n01', clientId: 'cli001', type: 'reminder', message: 'Reminder: Facial Care tomorrow at 9:00 AM with Maria Santos.', read: false, ts: '2026-02-26T10:00:00Z' },
    { id: 'n02', clientId: 'cli001', type: 'promo', message: '✨ New: Try our Hydra Facial! Book this month and get 10% off.', read: false, ts: '2026-02-25T09:00:00Z' },
    { id: 'n03', clientId: 'cli001', type: 'points', message: '🎉 You earned 50 loyalty points from your last visit!', read: true, ts: '2026-02-20T11:00:00Z' },
    { id: 'n04', clientId: 'cli002', type: 'reminder', message: 'Reminder: Mani & Pedi today at 10:00 AM with Ana Reyes.', read: false, ts: '2026-02-27T07:00:00Z' },
    { id: 'n05', clientId: 'cli003', type: 'promo', message: '💆 Exclusive: As a VIP client, enjoy free eyebrow shaping on your next visit!', read: false, ts: '2026-02-24T09:00:00Z' },
  ],
  ids: { appt: 29, client: 9, service: 16 },
};

// ── Core DB engine ──────────────────────────────────────────
const _db = {
  r(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
  w(k, d) { try { localStorage.setItem(k, JSON.stringify(d)); return true; } catch (e) { return false; } },
  seeded() { return localStorage.getItem('spa_seeded') === 'v5'; },
  seed() {
    _db.w(DB_KEYS.ACCOUNTS, SEED.accounts);
    _db.w(DB_KEYS.SERVICES, SEED.services);
    _db.w(DB_KEYS.APPOINTMENTS, SEED.appointments);
    _db.w(DB_KEYS.CLIENTS, SEED.clients);
    _db.w(DB_KEYS.INCOME, SEED.income);
    _db.w(DB_KEYS.IDS, SEED.ids);
    _db.w(DB_KEYS.AUDIT, []);
    _db.w(DB_KEYS.REVIEWS, SEED.reviews);
    _db.w(DB_KEYS.NOTIFICATIONS, SEED.notifications);
    localStorage.setItem('spa_seeded', 'v5');
    console.log('%c✦ SPA DB v4.0 ready — 8 clients · 15 services · 28 appointments', 'color:#8fc49a;font-weight:bold;');
  },
  reset() {
    Object.values(DB_KEYS).forEach(k => localStorage.removeItem(k));
    localStorage.removeItem('spa_seeded');
    _db.seed();
  },
  nextId(type) {
    const ids = _db.r(DB_KEYS.IDS) || { appt: 29, client: 9, service: 16 };
    const n = ids[type] || 1; ids[type] = n + 1; _db.w(DB_KEYS.IDS, ids); return n;
  },
  log(action, entity, detail, who) {
    const log = _db.r(DB_KEYS.AUDIT) || [];
    log.unshift({ action, entity, detail, who, ts: new Date().toISOString() });
    if (log.length > 500) log.length = 500;
    _db.w(DB_KEYS.AUDIT, log);
  },
  storageKB() {
    let b = 0; try { for (const k in localStorage) if (k.startsWith('spa')) b += (localStorage[k]||'').length; } catch (e) { }
    return (b / 1024).toFixed(1);
  },
};

// ── SPA API ─────────────────────────────────────────────────
const SPA = {
  init() { if (!_db.seeded()) _db.seed(); },

  // Live getters — always fresh from localStorage
  get accounts()     { return _db.r(DB_KEYS.ACCOUNTS)      || []; },
  get services()     { return _db.r(DB_KEYS.SERVICES)       || []; },
  get appointments() { return _db.r(DB_KEYS.APPOINTMENTS)   || []; },
  get clients()      { return _db.r(DB_KEYS.CLIENTS)        || []; },
  get incomeData()   { return _db.r(DB_KEYS.INCOME)         || []; },
  get reviews()      { return _db.r(DB_KEYS.REVIEWS)        || []; },
  get notifications(){ return _db.r(DB_KEYS.NOTIFICATIONS)  || []; },

  // ── AUTH ──────────────────────────────────────────────────
  login(email, pw) {
    return this.accounts.find(a => a.email === email && a.password === pw) || null;
  },
  registerAccount(data) {
    const accs = this.accounts;
    if (accs.find(a => a.email === data.email)) return { error: 'Email already registered.' };
    const id = 'cli' + String(_db.nextId('client')).padStart(3, '0');
    const acc = { id, role: 'client', ...data };
    accs.push(acc); _db.w(DB_KEYS.ACCOUNTS, accs);
    _db.log('REGISTER', 'account', { id, email: data.email }, id);
    return acc;
  },
  updateAccount(id, changes) {
    const accs = this.accounts;
    const i = accs.findIndex(a => a.id === id);
    if (i < 0) return false;
    accs[i] = { ...accs[i], ...changes }; _db.w(DB_KEYS.ACCOUNTS, accs);
    _db.log('UPDATE', 'account', { id, fields: Object.keys(changes) }, id);
    return accs[i];
  },

  // ── SERVICES ─────────────────────────────────────────────
  addService(data) {
    const svcs = this.services;
    const svc = { id: 's' + String(_db.nextId('service')).padStart(2, '0'), active: true, ...data };
    svcs.push(svc); _db.w(DB_KEYS.SERVICES, svcs);
    _db.log('CREATE', 'service', { name: svc.name }, 'admin');
    return svc;
  },
  deleteService(id) {
    const svcs = this.services;
    const i = svcs.findIndex(s => s.id === id);
    if (i < 0) return false;
    const name = svcs[i].name; svcs.splice(i, 1); _db.w(DB_KEYS.SERVICES, svcs);
    _db.log('DELETE', 'service', { id, name }, 'admin');
    return true;
  },
  getServicePrice(name) {
    const s = this.services.find(x => x.name === name); return s ? s.price : 0;
  },
  getServiceByName(name) {
    return this.services.find(x => x.name === name) || null;
  },

  // ── CLIENTS ──────────────────────────────────────────────
  addClient(data) {
    const clients = this.clients;
    const id = 'cli' + String(_db.nextId('client')).padStart(3, '0');
    const c = {
      id, visits: 0, totalSpent: 0, loyaltyPts: 0,
      joinDate: new Date().toISOString().split('T')[0], lastVisit: '', ...data
    };
    clients.push(c); _db.w(DB_KEYS.CLIENTS, clients);
    _db.log('CREATE', 'client', { id, name: c.name }, 'admin');
    return c;
  },
  updateClient(id, changes) {
    const clients = this.clients;
    const i = clients.findIndex(c => c.id === id);
    if (i < 0) return false;
    clients[i] = { ...clients[i], ...changes }; _db.w(DB_KEYS.CLIENTS, clients);
    _db.log('UPDATE', 'client', { id, fields: Object.keys(changes) }, id);
    return clients[i];
  },
  getClient(id) { return this.clients.find(c => c.id === id) || null; },
  deleteClient(id) {
    const clients = this.clients;
    const i = clients.findIndex(c => c.id === id);
    if (i < 0) return false;
    clients.splice(i, 1); _db.w(DB_KEYS.CLIENTS, clients);
    _db.log('DELETE', 'client', { id }, 'admin');
    return true;
  },

  // ── APPOINTMENTS ─────────────────────────────────────────
  bookAppointment(data) {
    const appts = this.appointments;
    const id = 'a' + String(_db.nextId('appt')).padStart(3, '0');
    const appt = { id, ...data, status: 'pending', createdAt: new Date().toISOString() };
    appts.push(appt); _db.w(DB_KEYS.APPOINTMENTS, appts);
    _db.log('BOOK', 'appointment', { id, service: data.service, date: data.date }, data.clientId);
    // Auto-create booking notification
    this._addNotification(data.clientId, 'booking',
      `✅ Booking confirmed: ${data.service} on ${this.formatDate(data.date)} at ${this._fmtTime(data.time)}.`);
    return appt;
  },
  updateAppointmentStatus(id, status, who) {
    const appts = this.appointments;
    const i = appts.findIndex(a => a.id === id);
    if (i < 0) return false;
    const prev = appts[i].status;
    appts[i] = { ...appts[i], status, updatedAt: new Date().toISOString() };
    _db.w(DB_KEYS.APPOINTMENTS, appts);
    _db.log('STATUS', 'appointment', { id, from: prev, to: status }, who || 'system');
    if (status === 'completed') {
      const a = appts[i], cl = this.clients.find(c => c.id === a.clientId);
      if (cl) {
        const price = this.getServicePrice(a.service);
        const newPts = (cl.loyaltyPts || 0) + Math.floor(price / 10);
        this.updateClient(cl.id, {
          visits: (cl.visits || 0) + 1,
          totalSpent: (cl.totalSpent || 0) + price,
          lastVisit: a.date,
          loyaltyPts: newPts,
        });
        this._addNotification(a.clientId, 'points',
          `🎉 You earned ${Math.floor(price / 10)} loyalty points from your ${a.service} visit!`);
      }
    }
    return appts[i];
  },
  cancelAppointment(id, who) { return this.updateAppointmentStatus(id, 'cancelled', who); },
  getClientAppointments(clientId) {
    return this.appointments.filter(a => a.clientId === clientId);
  },
  hasActiveAppointment(clientId) {
    return this.appointments.some(a =>
      a.clientId === clientId && (a.status === 'pending' || a.status === 'confirmed')
    );
  },
  deleteAppointment(id, who) {
    const appts = this.appointments;
    const i = appts.findIndex(a => a.id === id);
    if (i < 0) return false;
    appts.splice(i, 1); _db.w(DB_KEYS.APPOINTMENTS, appts);
    _db.log('DELETE', 'appointment', { id }, who || 'admin');
    return true;
  },

  // ── STATS ─────────────────────────────────────────────────
  getMonthlyRevenue(y, m) {
    const pre = y + '-' + String(m).padStart(2, '0');
    return this.appointments
      .filter(a => a.status === 'completed' && a.date.startsWith(pre))
      .reduce((s, a) => s + this.getServicePrice(a.service), 0);
  },
  getTopServices(limit = 5) {
    const counts = {};
    this.appointments.filter(a => a.status === 'completed').forEach(a => {
      counts[a.service] = (counts[a.service] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name, count]) => ({ name, count, price: this.getServicePrice(name) }));
  },
  getRevenueByService() {
    const rev = {};
    this.appointments.filter(a => a.status === 'completed').forEach(a => {
      rev[a.service] = (rev[a.service] || 0) + this.getServicePrice(a.service);
    });
    return Object.entries(rev).sort((a, b) => b[1] - a[1]);
  },
  getDailyStats(dateStr) {
    const appts = this.appointments.filter(a => a.date === dateStr);
    const completed = appts.filter(a => a.status === 'completed');
    return {
      total: appts.length,
      confirmed: appts.filter(a => a.status === 'confirmed').length,
      pending: appts.filter(a => a.status === 'pending').length,
      completed: completed.length,
      cancelled: appts.filter(a => a.status === 'cancelled').length,
      revenue: completed.reduce((s, a) => s + this.getServicePrice(a.service), 0),
    };
  },

  // ── REVIEWS ──────────────────────────────────────────────
  addReview(data) {
    const reviews = this.reviews;
    const id = 'r' + String(reviews.length + 1).padStart(2, '0');
    const rev = { id, ...data, date: new Date().toISOString().split('T')[0] };
    reviews.unshift(rev); _db.w(DB_KEYS.REVIEWS, reviews);
    _db.log('CREATE', 'review', { id, service: data.service, rating: data.rating }, data.clientId);
    return rev;
  },
  getAverageRating() {
    const r = this.reviews;
    if (!r.length) return 0;
    return (r.reduce((s, x) => s + x.rating, 0) / r.length).toFixed(1);
  },

  // ── NOTIFICATIONS ─────────────────────────────────────────
  _addNotification(clientId, type, message) {
    if (!clientId || clientId === 'walk_in') return;
    const notifs = this.notifications;
    notifs.unshift({ id: 'n' + Date.now(), clientId, type, message, read: false, ts: new Date().toISOString() });
    if (notifs.length > 200) notifs.length = 200;
    _db.w(DB_KEYS.NOTIFICATIONS, notifs);
  },
  getClientNotifications(clientId) {
    return this.notifications.filter(n => n.clientId === clientId);
  },
  markNotificationRead(id) {
    const notifs = this.notifications;
    const n = notifs.find(x => x.id === id);
    if (n) { n.read = true; _db.w(DB_KEYS.NOTIFICATIONS, notifs); }
  },
  markAllNotificationsRead(clientId) {
    const notifs = this.notifications;
    notifs.filter(n => n.clientId === clientId).forEach(n => n.read = true);
    _db.w(DB_KEYS.NOTIFICATIONS, notifs);
  },
  getUnreadCount(clientId) {
    return this.notifications.filter(n => n.clientId === clientId && !n.read).length;
  },

  // ── AUDIT ─────────────────────────────────────────────────
  getAuditLog() { return _db.r(DB_KEYS.AUDIT) || []; },
  getStorageKB() { return _db.storageKB(); },

  // ── SESSION ──────────────────────────────────────────────
  persistSession(u) { sessionStorage.setItem(DB_KEYS.SESSION, JSON.stringify(u)); },
  getSession() {
    try { const s = sessionStorage.getItem(DB_KEYS.SESSION); return s ? JSON.parse(s) : null; }
    catch (e) { return null; }
  },
  clearSession() { sessionStorage.removeItem(DB_KEYS.SESSION); },

  // ── UTILS ────────────────────────────────────────────────
  formatDate(d) {
    if (!d) return '—';
    const [y, m, dy] = d.split('-');
    const mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return mo[+m - 1] + ' ' + (+dy) + ', ' + y;
  },
  formatCurrency(n) { return '₱' + Number(n || 0).toLocaleString(); },
  _fmtTime(t) {
    if (!t) return '';
    const [h, m] = t.split(':');
    const hr = parseInt(h);
    return `${hr > 12 ? hr - 12 : (hr === 0 ? 12 : hr)}:${m || '00'} ${hr >= 12 ? 'PM' : 'AM'}`;
  },
  getLoyaltyTier(pts) {
    if (pts >= 1000) return { tier: 'Gold', color: '#c49b55', icon: '👑' };
    if (pts >= 500)  return { tier: 'Silver', color: '#9ca3af', icon: '⭐' };
    return { tier: 'Bronze', color: '#b45309', icon: '🌿' };
  },

  // ── DEV ──────────────────────────────────────────────────
  resetDB() { _db.reset(); location.reload(); },
  _db,
};

SPA.init();
window.SPA = SPA;
