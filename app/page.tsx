"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink, Download, BookOpen, Zap, Shield, Settings, FileText, Activity, Users, Lock, Key, Home, ArrowUp, Play, Clock, Video } from 'lucide-react';

// Enhanced documentation structure with external links and videos
const documentationSections = [
  {
    id: 'overview',
    title: 'System Overview',
    icon: Home,
    hasExternalLinks: false,
    hasVideos: false,
    content: {
      title: 'CDAS Bill Documentation System',
      subtitle: 'Automated bill processing and management platform',
      sections: [
        {
          heading: 'System Purpose',
          content: 'The CDAS Bill Documentation System is designed to automate the process of downloading, processing, and managing bills from the CDAS portal. It provides a comprehensive workflow for bill verification, approval, and business process automation.'
        },
        {
          heading: 'Key Features',
          content: 'Automated bill downloads, intelligent data extraction, secure user management, comprehensive reporting, and real-time notifications ensure efficient bill processing workflows.'
        }
      ],
      architecture: true,
      image: '/schematic_architecture.png'
    }
  },
  {
    id: 'business-process-automation-with-ai',
    title: 'Business Process Automation with AI',
    icon: Users,
    hasExternalLinks: true,
    hasVideos: false,
    externalLinks: [
      {
        title: 'View Interactive AI Infographic',
        url: 'https://cdas-infographic.vercel.app',
        type: 'primary',
        description: 'Explore our interactive visualization of AI automation benefits'
      },
      {
        title: 'AI Automation Best Practices',
        url: 'https://example.com/ai-best-practices',
        type: 'secondary',
        description: 'Learn more about implementing AI in business processes'
      }
    ],
    content: {
      title: 'Business Process Automation with AI',
      subtitle: 'Leveraging AI for efficient Business Process Automation',
      sections: [
        {
          heading: 'Significant Cost Reduction',
          content: 'Optimized resource utilization, Improved accuracy, Consistent output quality, Eliminate repetitive tasks.'
        },
        {
          heading: 'Optimizing Efficiency, Accuracy, and Scalability',
          content: 'Scalable and Extensible, Leveraging cutting-edge AI automation technologies. Optimized workflows'
        },
        {
          heading: 'Rule-Based Execution',
          content: 'Predefined business rules drive precise automation of mouse clicks, page navigation, and keyboard inputs.'
        }
      ],
      url: "https://cdas-infographic.vercel.app"
    }
  },
  {
    id: 'authentication',
    title: 'Authentication & Security',
    icon: Shield,
    hasExternalLinks: false,
    hasVideos: false,
    content: {
      title: 'Authentication & Security',
      subtitle: 'Secure login, password management, and account protection',
      sections: [
        {
          heading: 'Account Lock/Unlock',
          content: 'Administrators can manually lock or unlock user accounts. It is recommended to lock accounts when users leave the organization for security purposes.'
        },
        {
          heading: 'Password Reset',
          content: 'Password resets can be initiated by administrators or users themselves. Reset links are sent via email and expire after 24 hours for security.'
        },
        {
          heading: 'Two-Factor Authentication',
          content: 'Enable 2FA for enhanced security. Users can configure authentication apps or SMS-based verification for additional account protection.'
        }
      ],
      image: 'https://iili.io/KBpbS2a.jpg'
    }
  },
  {
    id: 'workflow',
    title: 'Automation Workflow',
    icon: Activity,
    hasExternalLinks: false,
    hasVideos: false,
    content: {
      title: 'Invoice & bill Download Workflow',
      subtitle: 'Automated bill processing and data extraction pipeline',
      sections: [
        {
          heading: 'Automated Process Overview',
          content: 'The system automatically connects to the CDAS portal, downloads bills based on configured schedules, processes the data using AI extraction, and updates relevant systems.'
        },
        {
          heading: 'Data Processing Pipeline',
          content: 'Downloaded bills are processed through multiple stages: data extraction, validation, categorization, and storage. Each stage includes error handling and retry mechanisms.'
        },
        {
          heading: 'Integration Points',
          content: 'The workflow integrates with various systems including email notifications, database storage, reporting tools, and external APIs for comprehensive data management.'
        }
      ],
      image: "/process_automation.png",
      workflow: true
    }
  },
  {
    id: 'user-guide-reference',
    title: 'User Guide Quickstart Reference',
    icon: FileText,
    hasExternalLinks: false,
    hasVideos: false,
    content: {
      title: 'Quickstart Reference Documentation',
      subtitle: 'User guide & API reference for developers',
      sections: [
        {
          heading: 'Quickstart Script Execution',
          content: 'From Command Line (cmd) - navigate to directory\nCMD - launch script execution'
        },
        {
          heading: 'Schedule Script Execution',
          content: 'Windows Scheduler - user defined time intervals\nScript automatically triggered\n'
        },
        {
          heading: 'Authentication Endpoints',
          content: 'POST /api/auth/login - User authentication\nPOST /api/auth/logout - User logout\nPOST /api/auth/reset-password - Password reset'
        }
      ],
      image: 'cdas_execute_script_cmd.jpg'
    }
  },
  {
    id: 'user-reviews',
    title: 'User Reviews and Videos',
    icon: Video,
    hasExternalLinks: true,
    hasVideos: true,
    externalLinks: [
      {
        title: 'View All User Reviews',
        url: 'https://user-review-beta.vercel.app/',
        type: 'primary',
        description: 'See comprehensive user feedback and testimonials'
      }
    ],
    videoLinks: [
      
      {
        title: 'Business Process Automation Overview',
        url: 'https://youtu.be/BuDDzFjGxbk',
        thumbnail: 'https://iili.io/KxMmzoG.png',
        duration: '2:25'
      },
      {
        title: 'ESKER System Demo & Overview',
        url: 'https://youtu.be/qxFhSLAmvzw?si=5Z6gHe3mixwm6X-v',
        thumbnail: 'https://iili.io/Kxj0ZGV.jpg',
        duration: '2:20'
      }
    ],
    content: {
      title: 'User reviews & Testimonials',
      subtitle: 'Feedback from users and stakeholders',
      sections: [
        {
          heading: 'Awesome Time Saver',
          content: 'Ivy Chai - Accounts Executive\n"The CDAS automation has cut our bill processing time by 80%. What used to take hours now takes minutes!"'
        },
        {
          heading: 'Great Value-Add!',
          content: 'Chloe Chong - Accounts Payable\n"The system\'s accuracy and reliability have transformed our workflow. Highly recommend!"'
        }
      ],
      url: 'https://user-review-beta.vercel.app/'
    }
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: Settings,
    hasExternalLinks: false,
    hasVideos: false,
    content: {
      title: 'Guide to Common Issues and Solutions',
      subtitle: 'Some common issues and suggested solutions',
      sections: [
        {
          heading: 'Connection Issues',
          content: 'If experiencing connection problems to CDAS portal, check network connectivity, verify credentials, and ensure firewall settings allow the required connections.'
        },
        {
          heading: 'Processing Errors',
          content: 'Common processing errors include file format, data type issues, and timeout errors (network latency). Check logs for detailed error messages and retry mechanisms.'
        },
        {
          heading: 'Performance Optimization',
          content: 'For optimal performance, ensure adequate system resources, regular database maintenance, and proper caching configuration.'
        }
      ]
    }
  }
];

// Architecture diagram component
const ArchitectureDiagram = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200">
      <h4 className="text-xl font-bold text-gray-800 mb-6">System Architecture</h4>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <h5 className="font-semibold text-blue-800">Frontend Layer</h5>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Dashboard</li>
            <li>• Responsive UI Components</li>
            <li>• Real-time Updates</li>
            <li>• Data Processing</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h5 className="font-semibold text-green-800">Backend Services</h5>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Authentication Service</li>
            <li>• Data Extraction & Processing Pipeline</li>
            <li>• RPA</li>
            <li>• Sharepoint Integration</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <h5 className="font-semibold text-purple-800">Data Layer</h5>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Esker Database</li>
            <li>• Caching</li>
            <li>• File Storage (Sharepoint)</li>
            <li>• Message Queues</li>
          </ul>
        </div>
      </div>
      
      {/* Visual Flow Diagram */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <svg viewBox="0 0 800 300" className="w-full h-auto">
          {/* CDAS Portal */}
          <g>
            <rect x="50" y="50" width="100" height="60" rx="8" fill="#3B82F6" />
            <text x="100" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CDAS</text>
            <text x="100" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Portal</text>
          </g>
          
          {/* Arrow 1 */}
          <path d="M150 80 L200 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Web Scraper */}
          <g>
            <rect x="210" y="50" width="100" height="60" rx="8" fill="#10B981" />
            <text x="260" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Web</text>
            <text x="260" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Scraper</text>
          </g>
          
          {/* Arrow 2 */}
          <path d="M310 80 L360 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Data Processor */}
          <g>
            <rect x="370" y="50" width="100" height="60" rx="8" fill="#8B5CF6" />
            <text x="420" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Data</text>
            <text x="420" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Processor</text>
          </g>
          
          {/* Arrow 3 */}
          <path d="M470 80 L520 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Database */}
          <g>
            <rect x="530" y="50" width="100" height="60" rx="8" fill="#F59E0B" />
            <text x="580" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Database</text>
            <text x="580" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Storage</text>
          </g>
          
          {/* Notification System */}
          <g>
            <rect x="370" y="150" width="100" height="60" rx="8" fill="#EC4899" />
            <text x="420" y="175" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Notification</text>
            <text x="420" y="190" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">System</text>
          </g>
          
          {/* Arrow to notifications */}
          <path d="M420 110 L420 150" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Arrow definitions */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// Workflow diagram component
const WorkflowDiagram = () => {
  const steps = [
    { id: 1, title: 'Login to CDAS', icon: Lock, color: 'bg-blue-500' },
    { id: 2, title: 'Schedule Download', icon: Activity, color: 'bg-green-500' },
    { id: 3, title: 'Process Bills', icon: FileText, color: 'bg-purple-500' },
    { id: 4, title: 'Validate Data', icon: Shield, color: 'bg-orange-500' },
    { id: 5, title: 'Store Results', icon: Settings, color: 'bg-red-500' },
    { id: 6, title: 'Upload to Sharepoint', icon: Zap, color: 'bg-pink-500' }
  ];

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-200">
      <h4 className="text-xl font-bold text-gray-800 mb-6">Automation Workflow</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-3">
              <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white font-bold`}>
                <IconComponent size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Step {step.id}</div>
                <div className="font-semibold text-gray-800">{step.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-800 mb-2">Process Timeline</h5>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-4 pb-4 relative">
              <div className={`w-3 h-3 ${step.color} rounded-full z-10`}></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">{step.title}</div>
                <div className="text-xs text-gray-500">Automated process step {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// External Links Section Component
type ExternalLink = {
  title: string;
  url: string;
  type: string;
  description: string;
};

const ExternalLinksSection = ({ links }: { links: ExternalLink[] }) => {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl border border-blue-200">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <ExternalLink className="mr-3 text-blue-600" size={24} />
        External Resources
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <div key={index} className="group">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                link.type === 'primary' 
                  ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white border-gray-300 text-gray-800 hover:border-blue-500 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className={`font-semibold ${link.type === 'primary' ? 'text-white' : 'text-gray-800'}`}>
                  {link.title}
                </h5>
                <ExternalLink 
                  size={16} 
                  className={`transition-transform group-hover:translate-x-1 ${
                    link.type === 'primary' ? 'text-blue-200' : 'text-blue-600'
                  }`} 
                />
              </div>
              <p className={`text-sm ${
                link.type === 'primary' ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {link.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Video Content Section Component
type Video = {
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
};

const VideoContentSection = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl border border-purple-200">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Play className="mr-3 text-purple-600" size={24} />
        Video Content
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="text-purple-600 ml-1" size={24} />
                </div>
              </div>
              
              {/* Duration badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                <Clock size={12} className="mr-1" />
                {video.duration}
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {video.title}
              </h5>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                <Play size={16} className="mr-2" />
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EnhancedCdasDocs() {
  const [currentSection, setCurrentSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter sections based on search
  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.sections.some(sec => 
      sec.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const currentSectionData = documentationSections.find(s => s.id === currentSection);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface Section {
    id: string;
    title: string;
    icon: React.ElementType;
    hasExternalLinks: boolean;
    hasVideos: boolean;
    externalLinks?: ExternalLink[];
    videoLinks?: Video[];
    content: {
      title: string;
      subtitle: string;
      sections: {
        heading: string;
        content: string;
      }[];
      architecture?: boolean;
      workflow?: boolean;
      image?: string;
      url?: string;
    };
  }

  const handleSectionChange = (sectionId: Section['id']) => {
    setCurrentSection(sectionId);
    setSidebarOpen(false);
    scrollToTop();
  };

  // Handle download functionality
  const handleDownload = () => {
    window.print(); // This will open the print dialog which can save as PDF
  };

  // Handle external link functionality
  const handleExternalLink = () => {
    const section = documentationSections.find(s => s.id === currentSection);
    
    // Define section-specific external URLs
    const sectionUrls = {
      'overview': 'https://www.esker.com.sg/esker-demand/',
      'business-process-automation-with-ai': 'https://youtu.be/qxFhSLAmvzw?si=5Z6gHe3mixwm6X-v',
      'authentication': 'https://cloud.google.com/docs/authentication',
      'workflow': 'https://bpa-best-practices.vercel.app/',
      'user-guide-reference': 'https://learn.microsoft.com/en-us/windows/python/beginners',
      'user-reviews': 'https://user-review-beta.vercel.app/',
      'troubleshooting': 'https://bpa-best-practices.vercel.app/'
    };
    
    const url = sectionUrls[currentSection as keyof typeof sectionUrls] || 'https://docs.cdas.com';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    CDAS ESKER Documentation
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Bill and Invoice Processing & Management</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button 
                onClick={handleDownload}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Download/Print Documentation"
              >
                <Download size={18} />
              </button>
              
              <button 
                onClick={handleExternalLink}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Open Related External Links"
              >
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out`}>
          
          <div className="h-full overflow-y-auto p-6">
            {/* Mobile search */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {filteredSections.map((section) => {
                const IconComponent = section.icon;
                const isActive = currentSection === section.id;
                
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]'
                        : 'text-gray-700 hover:bg-white hover:shadow-md border border-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-gray-100 group-hover:bg-blue-100'
                      }`}>
                        <IconComponent 
                          size={18} 
                          className={isActive ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {section.title}
                        </div>
                        <div className={`text-sm mt-1 ${
                          isActive ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {section.content.sections.length} sections
                        </div>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform ${isActive ? 'rotate-90 text-white' : 'text-gray-400'}`}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Documentation Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-2 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{documentationSections.length}</div>
                  <div className="text-xs text-gray-600">Sections</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {documentationSections.reduce((acc, section) => acc + section.content.sections.length, 0)}
                  </div>
                  <div className="text-xs text-gray-600">Topics</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30" 
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-0" ref={contentRef}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {currentSectionData && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      {React.createElement(currentSectionData.icon, { size: 32 })}
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold mb-2">{currentSectionData.content.title}</h1>
                      <p className="text-blue-100 text-lg">{currentSectionData.content.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Sections */}
                  <div className="space-y-8">
                    {currentSectionData.content.sections.map((section, index) => (
                      <div key={index} className="relative">
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">
                              {index + 1}
                            </span>
                            {section.heading}
                          </h3>
                          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* External Links Section */}
                  {currentSectionData.hasExternalLinks && currentSectionData.externalLinks && (
                    <ExternalLinksSection links={currentSectionData.externalLinks} />
                  )}

                  {/* Video Content Section */}
                  {currentSectionData.hasVideos && currentSectionData.videoLinks && (
                    <VideoContentSection videos={currentSectionData.videoLinks} />
                  )}

                  {/* Image */}
                  {currentSectionData.content.image && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Visual Guide</h4>
                      <img
                        src={currentSectionData.content.image}
                        alt={currentSectionData.content.title}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                      />
                    </div>
                  )}

                  {/* Architecture diagram */}
                  {currentSectionData.content.architecture && <ArchitectureDiagram />}
                  
                  {/* Workflow diagram */}
                  {currentSectionData.content.workflow && <WorkflowDiagram />}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
