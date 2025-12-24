```html
<!DOCTYPE html>
<html lang="en">
<head>
  <base target="_blank">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Executive MBA Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1e40af',
                        secondary: '#3b82f6'
                    }
                }
            }
        }
    </script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <h1 class="text-2xl font-bold text-primary">Executive MBA Portfolio</h1>
                <nav class="hidden md:flex space-x-8">
                    <a href="#overview" class="text-gray-700 hover:text-primary transition-colors">Overview</a>
                    <a href="#projects" class="text-gray-700 hover:text-primary transition-colors">Projects</a>
                    <a href="#scores" class="text-gray-700 hover:text-primary transition-colors">Test Scores</a>
                    <a href="#progress" class="text-gray-700 hover:text-primary transition-colors">Progress</a>
                </nav>
                <button class="md:hidden text-gray-700 hover:text-primary">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Overview Section -->
    <section id="overview" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Executive MBA Journey</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Tracking my academic progress, project achievements, and professional development throughout my Executive MBA program.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Program Duration</h3>
                    <p class="text-gray-600">24 Months</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div class="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-calendar-check text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Current Semester</h3>
                    <p class="text-gray-600">Semester 2</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-chart-line text-2xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Overall GPA</h3>
                    <p class="text-gray-600">3.8/4.0</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Progress Section -->
    <section id="progress" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Academic Progress</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold mb-6">Overall Completion</h3>
                    <div class="mb-4">
                        <div class="flex justify-between mb-2">
                            <span class="text-sm font-medium text-gray-700">Program Progress</span>
                            <span class="text-sm font-medium text-gray-700">42%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-primary h-3 rounded-full" style="width: 42%"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between mb-2">
                            <span class="text-sm font-medium text-gray-700">Credits Completed</span>
                            <span class="text-sm font-medium text-gray-700">25/60</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-secondary h-3 rounded-full" style="width: 42%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold mb-6">Current Courses</h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="font-medium">Strategic Management</span>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">In Progress</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-medium">Financial Analysis</span>
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Completed</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-medium">Leadership & Ethics</span>
                            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Upcoming</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Projects Portfolio</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-primary h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Strategic Business Plan</h3>
                        <p class="text-gray-600 mb-4">Comprehensive 5-year business strategy for a mid-size technology company entering new markets.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Dec 15, 2024</span>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Completed</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold">Grade: A-</span>
                            <span class="text-gray-500">92/100</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-secondary h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Financial Analysis Report</h3>
                        <p class="text-gray-600 mb-4">In-depth financial analysis of Fortune 500 companies with investment recommendations.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Jan 20, 2025</span>
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">In Progress</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-secondary h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-yellow-500 h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Leadership Case Study</h3>
                        <p class="text-gray-600 mb-4">Analysis of leadership challenges and solutions in organizational change management.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Feb 28, 2025</span>
                            <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Not Started</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-gray-300 h-2 rounded-full" style="width: 0%"></div>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-green-500 h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Marketing Strategy</h3>
                        <p class="text-gray-600 mb-4">Digital marketing campaign strategy for product launch in competitive market.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Nov 30, 2024</span>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Completed</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold">Grade: B+</span>
                            <span class="text-gray-500">87/100</span>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-purple-500 h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Operations Management</h3>
                        <p class="text-gray-600 mb-4">Supply chain optimization project for manufacturing company efficiency improvement.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Mar 15, 2025</span>
                            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Planning</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 15%"></div>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-red-500 h-2"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Capstone Project</h3>
                        <p class="text-gray-600 mb-4">Comprehensive business solution integrating all MBA coursework and real-world application.</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">Due: Dec 2025</span>
                            <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Future</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-gray-300 h-2 rounded-full" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Test Scores Section -->
    <section id="scores" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Test Scores & Assessments</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Test Scores Table -->
                <div class="bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold mb-6">Recent Test Scores</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b border-gray-200">
                                    <th class="text-left py-3">Course</th>
                                    <th class="text-left py-3">Assessment</th>
                                    <th class="text-left py-3">Score</th>
                                    <th class="text-left py-3">Grade</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="py-3">Strategic Mgmt</td>
                                    <td class="py-3">Midterm</td>
                                    <td class="