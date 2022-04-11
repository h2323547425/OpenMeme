---
name: Beginner Bug Fixes #47
about: Add submit handler to form in Sidebar
title: ''
labels: ''
assignees: 'h2323547425'

---

**Issue found**
Form in Sidebar.jsx has no way to send. (It had attribute action="" when I found it)

**Action taken**
 - React-hook-form is applied to the form.
 - FormData is used to organize data to sent.
 - Axios is used to make post request.

**Additional note**
The backend reception and process of the data is still to be added due to time limitation. Configuration parser might be need to parse FormData.

**Possible other issue**
 - process.env.dburl variable seems to be undefined (no sure if this is related to my local machine setup)