
# 🧠 Git Cheat Sheet — For Everyday Folder & File Management

## 📦 Add/Track Stuff
```bash
git add .               # Stage *everything* in the current folder
git add foldername/     # Stage a specific folder
git add file.js         # Stage a specific file
```

## 💬 Commit Changes
```bash
git commit -m "your message"   # Commit your staged changes
```

## 📤 Push to GitHub
```bash
git push origin main           # Push to main branch (or whatever branch you're on)
```

## 📥 Pull Changes
```bash
git pull origin main           # Get latest changes from GitHub
```

## 🧼 Check What's Going On
```bash
git status                     # See what’s changed, what’s staged, what’s not
```

## 🔍 View Commit History
```bash
git log --oneline              # Quick view of recent commits
```

## 🚮 Remove Stuff
```bash
git rm file.js                 # Delete file from Git + your computer
git rm -r foldername/          # Delete folder from Git + your computer
git rm --cached file.js        # Untrack file but *keep it* locally
git rm -r --cached folder/     # Untrack folder but *keep* it on your system
```

## 🔁 Rename Stuff (and make Git track it right)
```bash
git mv old-name new-name      # Rename files/folders so Git knows it's a rename
```

## 😮‍💨 Undo Mistakes
```bash
git restore file.js           # Undo changes in file
git reset HEAD file.js        # Unstage a file you added
```

## 🧙‍♂️ Pro Tip
Git doesn't really track folders — only files. So always use `git add` and `git rm` when you rename folders, so Git catches the change.

---
