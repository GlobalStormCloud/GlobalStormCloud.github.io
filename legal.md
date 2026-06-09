---
layout: page
title: Privacy Policy
---

<h1>Privacy Policy</h1>

<p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit {{ site.title }} (the "Site").</p>

<h2>Personal Information We Collect</h2>

{% if site.google_analytics %}

<p>When you visit the Site, we automatically receive information about your device from your browser, such as your IP address. As you browse the Site, we also collect information about how you interact with the Site. We refer to this automatically-collected information as "Device Information".</p>

<p>We collect Device Information using cookies. "Cookies" are data files that are placed on your device. For more information about cookies and how to disable them, visit <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</p>

<p>We do this using Google Analytics: <a href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.</p>

<p>You can opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.</p>

{% else %}

<p>We do not collect any data about you or use any cookies.</p>

{% endif %}

<h2>Changes</h2>

<p>We may update this privacy policy from time to time for personal, operational, legal, or regulatory reasons.</p>

<h2>Contact Us</h2>

<p>For more information about our privacy practices or if you have questions, please contact us by email at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
