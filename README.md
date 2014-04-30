GitHub Kaigi
==========

GitHub KaigiはGitHub User Group主催のイベントであり、GitHubの正式なイベントではありません。
GitHub Kaigi is an event organized by the GitHub User Group and is not an official GitHub event.

## Installation & Usage

Use middleman to do live development and middleman build to render static file output to the /build/ directory.
For full Middleman documentation, visit the [Middleman website](http://middlemanapp.com/).

```
gem install middleman
```

Start by installing Bundler, if you don't already have it:

```
gem install bundler
```


Clone the repository down to your local machine:

```
git clone https://github.com/GitHubKaigi/githubkaigi.github.io.git
```

Change directories into this project and Bundle:

```
cd githubkaigi.github.io.git
bundle install
```

Start the preview server:

```
bundle exec middleman
```

Finally, you will want to build this project into a stand-alone site. From the project directory:

```
bundle exec middleman build
```

Deploys a middleman built site via git:

```
bundle exec middleman deploy
```