// Station Records — ledger/dossier style briefing deck
// Image naming: 1a, 2a, 3a ... matches slide order (see IMAGE_EXT below).

const IMAGE_EXT = 'jpg';

class StationRegistry {
  constructor() {
    this.currentIndex = 0;
    this.pages = [];

    this.loadingScreen = document.getElementById('loadingScreen');
    this.app = document.getElementById('app');
    this.viewport = document.getElementById('viewport');
    this.tabStrip = document.getElementById('tabStrip');
    this.headerSub = document.getElementById('headerSub');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.footCounter = document.getElementById('footCounter');

    this.init();
  }

  init() {
    setTimeout(() => {
      this.loadingScreen.style.display = 'none';
      this.app.style.display = 'flex';
      this.buildData();
      this.renderPages();
      this.renderTabStrip();
      this.bindEvents();
      this.goTo(0, true);
    }, 1300);
  }

  // ------------------------------------------------------------------
  // Data
  // ------------------------------------------------------------------
  buildData() {
    this.deckTitle = 'Station Records';
    this.deckSub = 'SEC-142 · Documents & Records at Station';

    const groups = [
      { cat: 'Introduction', items: [
        {
          title: 'Significance & Importance',
          desc: 'Station registers are more than records of daily activity. They provide useful information that supports sound decisions, accountability, and the continued improvement of station operations.',
          isIntro: true,
          points: [
            'For analysis of station activities, trends, and incidents.',
            'For reliable information to support decisions and follow-up.',
            'Can be used as evidence when reviewing events or actions.',
            'Can be used to identify gaps and improve station operations.'
          ]
        },
        {
          title: 'File System',
          desc: 'Station records are organized into separate folders in the Station Control Room. Use the file color to identify the type of information.',
          isIntro: true,
          isIndex: true,
          points: [
            '<span class="file-note"><strong class="file-tag file-tag-red">RED FILE</strong><span>Safety and operational procedures</span></span>',
            '<span class="file-note"><strong class="file-tag file-tag-green">GREEN FILE</strong><span>Business rules and revenue management</span></span>',
            '<span class="file-note"><strong class="file-tag file-tag-location">LOCATION</strong><span>Separate folders in the Station Control Room</span></span>'
          ]
        },
        {
          title: 'Red File Purpose & Contents',
          desc: 'The Red File contains miscellaneous procedures related to Station Operation & Safety.',
          isIntro: true,
          points: [
            'MRGR, 2020',
            'SOP-Stations',
            'Station Working Order (SWO)',
            'Safety Circulars (SC)',
            'Handbook for dealing with serious Incidents, Accident and Disasters',
            'Accident and Disasters Management Manual',
            'Role of Operation Staff during Contingencies',
            'Station Management Instructions (SM-Instruction)',
            'Safety Precautions and Essential Instruction for Working in AC Traction Area',
            "Dos and Don'ts with regard to Safety from 25 KV Traction Voltage"
          ]
        },
        {
          title: 'Green File Purpose & Contents',
          desc: 'The Green File contains miscellaneous documents such as business rules, revenue management and train operation procedures, and circulars.',
          isIntro: true,
          points: [
            'Business Rule',
            'Procedure of cash remittance into bank account',
            'Revenue Instructions',
            'Notices of Accidents and Enquiries there to Rules, 2002',
            'O&M Act and its Amendments',
            'Opening of Metro Railways for Public Carriage of Passengers Rules, 2014 and its amendment Rule-2019',
            'SOP-Train Operation',
            'Train Operators ATP operating manual',
            "TOs handbook on Troubleshooting",
            'Procedure order for monitoring and collecting video recording on CD/DVD',
            'Signaling book',
            'Metro Railways Prohibition of Carriage of large size luggage',
            'JPO for upkeep and duty of staff in case of trapping of passenger',
            'Red Alert Procedure'
          ]
        },
      ]},
      { cat: 'General & Administrative Registers', items: [
        { title: 'General & Administrative Registers', desc: 'Covers the day-to-day administrative logs used by station staff — from personnel records and attendance to asset tracking, incidents, and shift handovers.', isIndex: true },
        { title: 'Bio Data Register', desc: 'Maintains personal and professional profiles, including emergency contact details, of all staff deployed at the station for administrative tracking.', imageTag: '2a' },






        { title: 'Assurance Register', desc: 'Serves as a mandatory compliance log where staff sign to confirm they have read and understood the latest operational circulars and safety guidelines.', imageTags: ['3a', '3b', '3c'] },
        { title: 'Attendance Register', desc: 'Tracks the daily physical presence, shift timings, and leave records of all station personnel to ensure proper manpower deployment.', noImage: true, imageTag: '4a' },
        { title: 'Petty Repair Register', desc: 'Used to log minor infrastructure and civil complaints (such as broken tiles or plumbing issues) and track their resolution status by the maintenance department.', imageTag: '5a' },
        { title: 'Equipment Failure Register', desc: 'Records operational faults in critical station systems like AFC gates, lifts, and escalators, monitoring reporting times and repair durations.', imageTag: '6a' },
        { title: 'Station Access Register', desc: 'Ensures security by meticulously logging the entry, exit, and purpose of visit for all external contractors, maintenance teams, and non-station personnel.', imageTag: '7a' },
        { title: 'Inventory / Fixed Asset Register', desc: "Maintains an updated, formal ledger of the station's physical assets and equipment, tracking receipts, transfers, and total available balances.", imageTag: '8a' },
        { title: 'Incident / Accident Register', desc: 'Logs critical, unusual occurrences or emergencies at the station, capturing details like passenger rescues, medical aid provided, and police handovers.', imageTag: '9a' },
        { title: 'Lost and Found File', desc: 'Organizes the detailed records of articles misplaced by passengers, tracking their description, safekeeping, and eventual return to the rightful claimant.', imageTag: '10a' },
        { title: 'Station Diary', desc: 'Acts as the primary daily log for shift management, tracking staff deployment, cash balances, essential equipment status, and official shift handover remarks.', imageTag: '11a' },
        { title: 'Handing Over Memo', desc: 'A formal document used during shift changes to explicitly transfer the responsibility of specific station assets, keys, or ongoing operational issues to the incoming staff.', imageTag: '12a' },
        { title: 'SM Instructions', desc: 'A dedicated log where the Station Manager records specific daily directives, operational focuses, or corrective actions for the station staff to follow.', imageTag: '13a' },
        { title: 'Housekeeping Inspection Register', desc: 'Utilized by supervisors to log daily cleanliness checks across different station zones, ensuring the housekeeping contractor maintains strict hygiene standards.', imageTag: '14a' },

	{ title: 'Key Register', desc: 'Ensures station security by meticulously logging the issuance, purpose, and return of all facility keys by authorized personnel.', imageTag: '15a' },

{ title: 'Private Number Book', desc: 'Records unique private numbers exchanged between authorized staff to securely confirm safety instructions and block clearances.', imageTag: '16a' },


        { title: 'Grievance Register', desc: 'An internal log used to record and track the resolution of workplace complaints, administrative issues, or disputes raised by station staff.', noImage: true, imageTag: '17a' },
      ]},















      { cat: 'Revenue Registers', items: [
        { title: 'Revenue Registers', desc: 'Captures all revenue-related documentation, including ticketing operations, cash reconciliation, refunds, penalties, and stock management.', isIndex: true },
        { title: 'Gate Pass', desc: 'Authorizes the movement of specific revenue equipment, spare parts, or cash boxes in and out of the station premises securely.', imageTag: '19a' },
        { title: 'CCC / TOM Operator Register', desc: 'Tracks the deployment, shift timings, and specific counter assignments of Customer Care Centre (CCC) and Ticket Office Machine (TOM) operators.', imageTag: '20a' },


   { 
  title: 'SAF (Shift Abstract Form)', 
  desc: 'A detailed accounting document used to record specific system adjustments, manual fare corrections, and daily financial reconciliation at the station.', imageTag: '21a'},




        { title: 'Outstanding Format', desc: 'Logs any discrepancies, shortages, or pending revenue amounts identified during shift cash counting that need to be recovered or explained by operators.', imageTag: '22a' },
        { title: 'Outstanding Summary Record', desc: 'Consolidates all individual outstanding formats into a master ledger to track long-term revenue discrepancies and their final clearance status.', imageTag: '23a' },
        { title: 'Summary of Stock Register', desc: 'Monitors the inventory of vital revenue-related consumables, such as receipt paper rolls and manual tickets, ensuring uninterrupted ticketing operations.', imageTag: '24a' },
        { title: 'Miscellaneous Receipt Booklet', desc: 'Used to issue official receipts for non-standard financial transactions or specialized service fees collected at the station level.', imageTag: '25a' },
        { title: 'Free Exit Surcharge Register', desc: 'Documents instances where passengers are authorized to exit the system without standard fare deduction, often logging specific surcharge conditions or exceptions.', noImage: true, imageTag: '26a' },
        { title: 'Penalty Receipt Booklet', desc: 'Utilized to issue official receipts and record fines collected from passengers for rule violations like ticketless travel or unauthorized entry.', imageTag: '27a' },
        { title: 'Manual Refund Booklet', desc: 'Serves as a formal financial record for processing cash refunds to passengers during smart card errors, ticketing discrepancies, or system failures.', imageTag: '28a' },
        { title: 'Earning Register', desc: 'The primary daily accounting sheet consolidating all cash, POS, and QR earnings alongside stock balances and shift imprest data.', imageTag: '29a' },
        { title: 'SDM (Service Deficiency Memo)', desc: 'Documents specific instances of contractor staff lapses — such as late reporting or dress code violations — to enforce service level agreements.', imageTag: '30a' },
        { title: 'Manual Ticket', desc: 'Tracks the issuance of pre-printed emergency paper tickets used to maintain passenger flow during total Automated Fare Collection (AFC) system outages.', imageTag: '31a' },
	{ title: 'Balance Sheet', desc: 'A daily financial statement used to precisely reconcile all shift ticketing and penalty revenues against the physical cash collected and deposited by the station.', imageTag: '32a' },














        { title: 'Complaint Book', desc: 'A public-facing ledger allowing passengers to formally record grievances, feedback, or suggestions regarding ticketing, facilities, and staff service.', imageTag: '33a' }
      ]},
      { cat: 'Safety Registers', items: [
        { title: 'Safety Registers', desc: 'Contains critical safety authorizations and logs required for safe track access, block working, and staff preparedness drills.', isIndex: true },
        { title: 'PTW Issue', desc: 'A formal Permit to Work document issued to authorize maintenance teams to safely access hazardous or restricted track areas.', imageTag: '35a' },
        { title: 'PTW Cancel', desc: 'The complementary log ensuring that all personnel, tools, and materials are safely removed from the track before the Permit to Work is officially closed.', imageTag: '36a' },
        { title: 'Possession Register', desc: "Logs the granting and cancellation of formal Engineer's Possessions, which block designated track sections for heavy maintenance works.", imageTag: '37a' },
        { title: 'Shadow Checklist', desc: 'A mandatory, step-by-step verification log used by the Station Controller to ensure all electrical safety protocols are met before granting a power block.', imageTag: '38a' },
        { title: 'Indemnity Bond', desc: 'A legal document signed by external contractors or visitors to protect the Metro Corporation from liability during hazardous on-site maintenance.', imageTag: '39a' },
        { title: 'Caution Order', desc: 'An official written directive issued to Train Operators, instructing them to proceed at restricted speeds due to temporary track hazards or maintenance.', imageTag: '40a' },
        { title: 'Authority to Proceed', desc: 'A critical safety authorization granted to Train Operators, allowing them to safely pass a defective or red signal under strict manual guidance.', imageTag: '41a' },
        { title: 'Night Drill Register', desc: 'Documents safety and operational mock drills conducted during non-revenue hours to ensure staff preparedness for emergencies.', imageTag: '42a' }
      ]}
    ];

    this.steps = [];
    let n = 0;
    groups.forEach(group => {
      const groupStartN = n + 2; // first non-index item's code within this group
      const registerEntries = group.items
        .filter(i => !i.isIndex)
        .map((i, idx) => ({ title: i.title, code: String(groupStartN + idx).padStart(2, '0') }));
      group.items.forEach(item => {
        n += 1;
        this.steps.push({
          code: String(n).padStart(2, '0'),
          cat: group.cat,
          title: item.title,
          desc: item.desc,
          isIndex: !!item.isIndex,
          isIntro: !!item.isIntro,
          list: item.isIndex ? registerEntries : null,
          points: item.points || [],
          imageTags: item.imageTags || (item.imageTag ? [item.imageTag] : []),
          noImage: !!item.noImage
        });
      });
    });
    this.registerPageCount = this.steps.filter(step => !step.isIntro).length;
  }

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
  renderPages() {
    this.viewport.innerHTML = '';
    this.pages = [];

    const cover = this.buildCover();
    this.viewport.appendChild(cover);
    this.pages.push({ el: cover, code: 'COVER', special: true });

    this.steps.forEach(step => {
      const page = this.buildSheet(step);
      this.viewport.appendChild(page);
      this.pages.push({ el: page, code: step.code, special: false });
    });

    const end = this.buildEnd();
    this.viewport.appendChild(end);
    this.pages.push({ el: end, code: 'END', special: true });
  }

  buildCover() {
    const page = document.createElement('div');
    page.className = 'sheet sheet-cover';
    page.innerHTML = `
      <div class="cover-card">
        <div class="stamp-badge plain">NMRC</div>
        <h1>${this.deckTitle}</h1>
        <p>${this.registerPageCount} register and section pages · administrative, revenue, and safety records.</p>
        <button class="cover-cta" id="startBtn">Open register</button>
      </div>
    `;
    page.querySelector('#startBtn').addEventListener('click', () => this.goTo(1));
    return page;
  }

  buildSheet(step) {
    const page = document.createElement('div');
    page.className = 'sheet' + (step.isIndex ? ' page-index' : '') + (step.isIntro ? ' page-intro' : '');
    const photoBlock = (step.isIndex || step.noImage || !step.imageTags.length) ? '' : `
        <div class="photo-gallery">
          ${step.imageTags.map(imageTag => `
            <div class="photo-slot">
              <div class="washi-tape"></div>
              <img src="assets/images/${imageTag}.${IMAGE_EXT}" alt="${step.title} reference image ${imageTag}"
                   onload="if(this.naturalHeight>this.naturalWidth){this.closest('.photo-slot').classList.add('is-portrait');}"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="photo-fallback" style="display:none;">
                <span>IMAGE ${imageTag} NOT FOUND</span>
                <span>place file at assets/images/${imageTag}.${IMAGE_EXT}</span>
              </div>
              <button class="photo-zoom-hint" type="button" aria-hidden="true"><i class="zoom-icon"></i>Click to zoom</button>
            </div>`).join('')}
        </div>`;

    const indexList = (step.isIndex && step.list && step.list.length) ? `
        <ol class="index-list">
          ${step.list.map(entry => `<li data-goto="${entry.code}" tabindex="0" role="button">${entry.title}</li>`).join('')}
        </ol>` : '';
    const introPoints = step.isIntro ? `
        <ul class="intro-points">
          ${step.points.map(point => `<li>${point}</li>`).join('')}
        </ul>` : '';

    page.innerHTML = `
      <div class="sheet-card">
        <div class="stamp-badge${step.isIndex ? '' : ' plain'}">${step.isIntro ? 'INTRO' : step.isIndex ? 'SECTION' : 'ENTRY'}</div>
        <div class="sheet-kicker">
          <span class="code">${step.code}/${this.steps.length}</span>
          <span>${step.cat}</span>
        </div>
        <div class="sheet-rule"></div>
        <h2 class="sheet-title">${step.title}</h2>
        <p class="sheet-desc">${step.desc}</p>
        ${introPoints}
        ${indexList}
        ${photoBlock}
      </div>
    `;

    if (indexList) {
      page.querySelectorAll('.index-list li[data-goto]').forEach(li => {
        const jump = () => this.goToByCode(li.dataset.goto);
        li.addEventListener('click', jump);
        li.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); jump(); }
        });
      });
    }

    return page;
  }

  buildEnd() {
    const page = document.createElement('div');
    page.className = 'sheet sheet-end';
    page.innerHTML = `
      <div class="cover-card">
        <div class="stamp-badge">END</div>
        <h1>End of Registers</h1>
        <p>${this.deckTitle}</p>
        <button class="cover-cta" id="restartBtn">Return to cover</button>
      </div>
    `;
    page.querySelector('#restartBtn').addEventListener('click', () => this.goTo(0));
    return page;
  }

  renderTabStrip() {
    this.tabStrip.innerHTML = '';

    const coverTab = document.createElement('button');
    coverTab.className = 'tab-special';
    coverTab.textContent = 'COVER';
    coverTab.addEventListener('click', () => this.goTo(0));
    this.tabStrip.appendChild(coverTab);

    let lastCat = null;
    this.steps.forEach((step, i) => {
      if (step.cat !== lastCat) {
        const catEl = document.createElement('span');
        catEl.className = 'tab-cat';
        catEl.textContent = step.cat.toUpperCase();
        this.tabStrip.appendChild(catEl);
        lastCat = step.cat;
      }
      const tab = document.createElement('button');
      tab.className = 'tab-item' + (step.isIndex ? ' is-index' : '');
      tab.dataset.code = step.code;
      tab.textContent = step.code;
      tab.title = step.title;
      tab.addEventListener('click', () => this.goTo(i + 1));
      this.tabStrip.appendChild(tab);
    });

    const endTab = document.createElement('button');
    endTab.className = 'tab-special';
    endTab.textContent = 'END';
    endTab.addEventListener('click', () => this.goTo(this.pages.length - 1));
    this.tabStrip.appendChild(endTab);
  }

  // ------------------------------------------------------------------
  // Navigation
  // ------------------------------------------------------------------
  goTo(index, isInit = false) {
    if (index < 0 || index >= this.pages.length) return;
    if (!isInit && this.pages[this.currentIndex]) {
      this.pages[this.currentIndex].el.classList.remove('active');
    }
    this.currentIndex = index;
    this.pages[this.currentIndex].el.classList.add('active');
    this.pages[this.currentIndex].el.scrollTop = 0;
    this.updateChrome();
  }

  next() { this.goTo(this.currentIndex + 1); }
  prev() { this.goTo(this.currentIndex - 1); }

  goToByCode(code) {
    const idx = this.pages.findIndex(p => !p.special && p.code === code);
    if (idx !== -1) this.goTo(idx);
  }

  updateChrome() {
    const page = this.pages[this.currentIndex];
    this.footCounter.textContent = `${String(this.currentIndex + 1).padStart(2, '0')} / ${this.pages.length}`;
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex === this.pages.length - 1;

    if (!page.special) {
      const step = this.steps.find(s => s.code === page.code);
      if (step) this.headerSub.textContent = `SEC-142 · ${step.cat}`;
    } else {
      this.headerSub.textContent = this.deckSub;
    }

    this.tabStrip.querySelectorAll('.tab-item, .tab-special').forEach(el => el.classList.remove('active'));
    if (!page.special) {
      const match = this.tabStrip.querySelector(`.tab-item[data-code="${page.code}"]`);
      if (match) {
        match.classList.add('active');
        match.scrollIntoView({ block: 'nearest', inline: 'center' });
      }
    } else {
      const specials = this.tabStrip.querySelectorAll('.tab-special');
      if (page.code === 'COVER') specials[0]?.classList.add('active');
      if (page.code === 'END') specials[specials.length - 1]?.classList.add('active');
    }
  }

  // ------------------------------------------------------------------
  // Events
  // ------------------------------------------------------------------
  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    document.addEventListener('keydown', (e) => {
      if (this.lightbox?.classList.contains('open')) {
        if (e.key === 'ArrowRight') { e.preventDefault(); this.navigateLightbox(1); return; }
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.navigateLightbox(-1); return; }
      }
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault(); this.next(); break;
        case 'ArrowLeft':
          e.preventDefault(); this.prev(); break;
        case 'Home':
          e.preventDefault(); this.goTo(0); break;
        case 'End':
          e.preventDefault(); this.goTo(this.pages.length - 1); break;
        case 'Escape':
          this.closeLightbox(); break;
      }
    });

    this.lightbox = document.createElement('div');
    this.lightbox.className = 'lightbox';
    this.lightbox.innerHTML = `
      <div class="lightbox-toolbar">
        <button type="button" data-act="out" aria-label="Zoom out">−</button>
        <span class="lightbox-pct" id="lightboxPct">100%</span>
        <span class="lightbox-count" id="lightboxCount"></span>
        <button type="button" data-act="in" aria-label="Zoom in">+</button>
        <button type="button" data-act="reset" aria-label="Reset zoom">reset</button>
        <button type="button" data-act="close" aria-label="Close">close</button>
      </div>
      <div class="lightbox-stage" id="lightboxStage">
        <button class="lightbox-nav lightbox-prev" type="button" data-image-nav="-1" aria-label="Previous image">‹</button>
        <img alt="" draggable="false">
        <button class="lightbox-nav lightbox-next" type="button" data-image-nav="1" aria-label="Next image">›</button>
      </div>
    `;
    document.body.appendChild(this.lightbox);
    this.lightboxImg = this.lightbox.querySelector('img');
    this.lightboxStage = this.lightbox.querySelector('#lightboxStage');
    this.lightboxPct = this.lightbox.querySelector('#lightboxPct');
    this.lightboxCount = this.lightbox.querySelector('#lightboxCount');

    this.zoomState = { scale: 1, x: 0, y: 0 };

    const applyZoom = () => {
      const { scale, x, y } = this.zoomState;
      this.lightboxImg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      this.lightboxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      this.lightboxPct.textContent = `${Math.round(scale * 100)}%`;
    };
    this.applyZoom = applyZoom;

    const setScale = (newScale, cx, cy) => {
      newScale = Math.min(4, Math.max(1, newScale));
      const stageRect = this.lightboxStage.getBoundingClientRect();
      const px = (cx ?? stageRect.width / 2 + stageRect.left) - stageRect.left - stageRect.width / 2;
      const py = (cy ?? stageRect.height / 2 + stageRect.top) - stageRect.top - stageRect.height / 2;
      const ratio = newScale / this.zoomState.scale;
      this.zoomState.x = this.zoomState.x - px * (ratio - 1);
      this.zoomState.y = this.zoomState.y - py * (ratio - 1);
      this.zoomState.scale = newScale;
      if (newScale === 1) { this.zoomState.x = 0; this.zoomState.y = 0; }
      applyZoom();
    };
    this.setScale = setScale;

    this.lightbox.querySelector('.lightbox-toolbar').addEventListener('click', (e) => {
      const act = e.target.closest('button')?.dataset.act;
      if (!act) return;
      if (act === 'in') setScale(this.zoomState.scale + 0.5);
      if (act === 'out') setScale(this.zoomState.scale - 0.5);
      if (act === 'reset') setScale(1);
      if (act === 'close') this.closeLightbox();
    });

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.closeLightbox();
    });
    this.lightboxStage.addEventListener('click', (e) => {
      const navButton = e.target.closest('[data-image-nav]');
      if (navButton) this.navigateLightbox(Number(navButton.dataset.imageNav));
    });

    this.lightboxStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      setScale(this.zoomState.scale + delta, e.clientX, e.clientY);
    }, { passive: false });

    this.lightboxImg.addEventListener('dblclick', (e) => {
      setScale(this.zoomState.scale > 1 ? 1 : 2.5, e.clientX, e.clientY);
    });

    let dragging = false, dragStartX = 0, dragStartY = 0, originX = 0, originY = 0;
    this.lightboxImg.addEventListener('mousedown', (e) => {
      if (this.zoomState.scale <= 1) return;
      dragging = true;
      dragStartX = e.clientX; dragStartY = e.clientY;
      originX = this.zoomState.x; originY = this.zoomState.y;
      this.lightboxImg.style.cursor = 'grabbing';
    });
    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      this.zoomState.x = originX + (e.clientX - dragStartX);
      this.zoomState.y = originY + (e.clientY - dragStartY);
      applyZoom();
    });
    window.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      this.lightboxImg.style.cursor = this.zoomState.scale > 1 ? 'grab' : 'zoom-in';
    });

    let pinchDist = null;
    let swipeStartX = null;
    let panStartX = 0, panStartY = 0, panOriginX = 0, panOriginY = 0, singleTouchPan = false;
    this.lightboxStage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        swipeStartX = null;
        pinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      } else if (e.touches.length === 1 && this.zoomState.scale > 1) {
        swipeStartX = null;
        singleTouchPan = true;
        panStartX = e.touches[0].clientX; panStartY = e.touches[0].clientY;
        panOriginX = this.zoomState.x; panOriginY = this.zoomState.y;
      } else if (e.touches.length === 1) {
        swipeStartX = e.touches[0].clientX;
      }
    });
    this.lightboxStage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && pinchDist != null) {
        e.preventDefault();
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        setScale(this.zoomState.scale * (newDist / pinchDist), cx, cy);
        pinchDist = newDist;
      } else if (singleTouchPan && e.touches.length === 1) {
        e.preventDefault();
        this.zoomState.x = panOriginX + (e.touches[0].clientX - panStartX);
        this.zoomState.y = panOriginY + (e.touches[0].clientY - panStartY);
        applyZoom();
      }
    }, { passive: false });
    this.lightboxStage.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) pinchDist = null;
      if (e.touches.length === 0) {
        singleTouchPan = false;
        if (swipeStartX !== null && this.zoomState.scale === 1) {
          const deltaX = e.changedTouches[0].clientX - swipeStartX;
          if (Math.abs(deltaX) > 50) this.navigateLightbox(deltaX < 0 ? 1 : -1);
        }
        swipeStartX = null;
      }
    });

    this.viewport.addEventListener('click', (e) => {
      const img = e.target.closest('.photo-slot img');
      if (!img || img.style.display === 'none') return;
      const images = Array.from(img.closest('.photo-gallery').querySelectorAll('.photo-slot img'))
        .filter(image => image.style.display !== 'none')
        .map(image => ({ src: image.src, alt: image.alt }));
      const imageIndex = images.findIndex(image => image.src === img.src);
      this.openLightbox(images, imageIndex);
    });

    let touchStartX = 0;
    this.viewport.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
    this.viewport.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 60) { dx < 0 ? this.next() : this.prev(); }
    });
  }

  openLightbox(images, index) {
    this.lightboxImages = images;
    this.lightboxImageIndex = index;
    this.lightbox.querySelectorAll('.lightbox-nav').forEach(button => {
      button.hidden = images.length < 2;
    });
    this.lightboxCount.hidden = images.length < 2;
    this.showLightboxImage();
    this.lightbox.classList.add('open');
  }

  showLightboxImage() {
    const image = this.lightboxImages[this.lightboxImageIndex];
    this.lightboxImg.src = image.src;
    this.lightboxImg.alt = image.alt;
    this.lightboxCount.textContent = `${this.lightboxImageIndex + 1} / ${this.lightboxImages.length}`;
    this.zoomState = { scale: 1, x: 0, y: 0 };
    this.applyZoom();
  }

  navigateLightbox(direction) {
    if (!this.lightboxImages || this.lightboxImages.length < 2) return;
    this.lightboxImageIndex = (this.lightboxImageIndex + direction + this.lightboxImages.length) % this.lightboxImages.length;
    this.showLightboxImage();
  }

  closeLightbox() {
    this.lightbox.classList.remove('open');
  }
}

document.addEventListener('DOMContentLoaded', () => new StationRegistry());
