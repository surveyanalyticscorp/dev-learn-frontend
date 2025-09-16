# Contributing to the Dev Learning Sessions

## The Goal

The main goal of this repository is to serve as a "gallery" of everyone's work for each session. Instead of overwriting or modifying the base session files, you will create your own folder and work within it. This allows us to see how different developers approached the same problem.

## How Can I Contribute?

We will have several sessions, each in its own folder (e.g., `sessions/s01`, `sessions/s02`). Your task is to create your own workspace for each session and add your code there.

### Your Contribution Workflow

Here are the steps to make your contribution:

**1. Fork the Repository**

Click the "Fork" button at the top-right of this page to create your own copy of this repository on your GitHub account.

**2. Clone Your Fork**

Now, clone your forked repository to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/dev-learning-session-fe.git
cd dev-learning-session-fe
```

**3. Create a New Branch**

It's still good practice to create a new branch for your changes. Use a descriptive name, like `yourname-session-01`.

```bash
git checkout -b yourname-session-01
```

**4. Create Your Personal Directory**

Navigate to the session you are working on (e.g., `sessions/s01/participants`). Inside that folder, create a new directory with your name or GitHub username.

For example, if your name is Jane Doe and you're working on session 1:

```bash
mkdir sessions/s01/participants/jane-doe
```

**5. Copy the Base Files**

Copy the base files from the session's root directory into your new personal folder.

For example, for session 1:

```bash
cp sessions/s01/index.html sessions/s01/script.js sessions/s01/style.css sessions/s01/participants/jane-doe/
```

**6. Make Your Changes**

Now, do the work! **Only modify the files inside your personal folder** (e.g., `sessions/s01/participants/jane-doe/`). This is your playground.

**7. Commit Your Changes**

Once you're happy with your changes, add your new folder to git and commit it with a clear message.

```bash
git add sessions/s01/participants/jane-doe
git commit -m "feat(s01): Add Jane Doe's submission for session 1"
```

**8. Push to Your Fork**

Push your branch and your commits to your forked repository on GitHub.

```bash
git push origin yourname-session-01
```

**9. Open a Pull Request (PR)**

Go to your forked repository on GitHub. You should see a prompt to create a Pull Request from your new branch. Click it, add a title and a brief description of your changes, and submit it.

**10. Review and Merge**

The session organizers will review your PR to make sure your files are in the correct folder and then merge it. Congratulations, and thank you for your contribution!
