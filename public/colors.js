



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-119461b8a22c3dc631a815795aa9d7f436fe38386cd99a1ca106fd2798f159aa.css" integrity="sha256-EZRhuKIsPcYxqBV5WqnX9Db+ODhs2ZocoQb9J5jxWao=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-7058063ae74e2ebd7fad727b2494d9191c76f64f2350af48072cbf0c3d28d0b8.css" integrity="sha256-cFgGOudOLr1/rXJ7JJTZGRx29k8jUK9IByy/DD0o0Lg=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>colorPicker/colors.js at master · PitPik/colorPicker</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/628295?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="PitPik/colorPicker" name="twitter:title" /><meta content="colorPicker - Advanced javaScript color picker and color conversion / calculation (rgb, hsv, hsl, hex, cmyk, cmy, XYZ, Lab, alpha, WCAG 2.0, ...)" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/628295?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="PitPik/colorPicker" property="og:title" /><meta content="https://github.com/PitPik/colorPicker" property="og:url" /><meta content="colorPicker - Advanced javaScript color picker and color conversion / calculation (rgb, hsv, hsl, hex, cmyk, cmy, XYZ, Lab, alpha, WCAG 2.0, ...)" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NTExNDYwNDpkMzVhYTdiYTlmODY4OTJjNzRlNGFlYTQwZDk4NjhiYjplNmZmYjM2ZDlmY2ViOGFiOGYyMzI0ZTgyODBhZjMxNzNmNWMzZTI3ODNiNTE1ODg0OTYwMDA1MDc2YmI1MTcz--1caee058a40b9aa55a9d35c6db144ded73352441">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="57455127:A381:9D44974:581B6472" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="57455127:A381:9D44974:581B6472" name="octolytics-dimension-request_id" /><meta content="5114604" name="octolytics-actor-id" /><meta content="Sevick" name="octolytics-actor-login" /><meta content="1656e8b972953f856ef81b4e005c173e45491f05e80e3c3a173dbebc3f294c30" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Sevick">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YWUxNTUyMWUzODY0YzA5Nzc1NDNhZTUwZTlkNzVhOGVmNTdkZTgwYTUzODNmMzQxOTJlZTMwNTZjNjM5ZDc4ZHx7InJlbW90ZV9hZGRyZXNzIjoiODcuNjkuODEuMzkiLCJyZXF1ZXN0X2lkIjoiNTc0NTUxMjc6QTM4MTo5RDQ0OTc0OjU4MUI2NDcyIiwidGltZXN0YW1wIjoxNDc4MTkwMTk0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="84fe83d4c2786b2912f95f971ad866d501205776">
    <meta content="52fbfb0fa49089115529b625363be39fe051e66e" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="6efa2f83a821c5322f91354d8260d055">
    

      
  <meta name="description" content="colorPicker - Advanced javaScript color picker and color conversion / calculation (rgb, hsv, hsl, hex, cmyk, cmy, XYZ, Lab, alpha, WCAG 2.0, ...)">
  <meta name="go-import" content="github.com/PitPik/colorPicker git https://github.com/PitPik/colorPicker.git">

  <meta content="628295" name="octolytics-dimension-user_id" /><meta content="PitPik" name="octolytics-dimension-user_login" /><meta content="22604661" name="octolytics-dimension-repository_id" /><meta content="PitPik/colorPicker" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="22604661" name="octolytics-dimension-repository_network_root_id" /><meta content="PitPik/colorPicker" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/PitPik/colorPicker/commits/master.atom" rel="alternate" title="Recent Commits to colorPicker:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/PitPik/colorPicker/blob/master/colors.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/search" class="js-site-search-form" data-scoped-search-url="/PitPik/colorPicker/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:5114604" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="PitPik/colorPicker">This repository</span>
  </div>
    <a class="dropdown-item" href="/PitPik/colorPicker/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Sevick"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Sevick" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5114604?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Sevick</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Sevick" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/Sevick?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="f8hDYtQi9QXOLXVf8kyR/BADu5wr8pdBzMVW9IQt9n69oZEt7FiuDTjTuooZ6eDLwgZnnU+DFEwnx3gZe8DXEw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ev7hAqNL1GfNZFOz7fjmxN+rYPA/Tda6OX7in5JjJulwbtkjbkSdxl+bsns4ddFN/9Om/dtVPAElhtNOCr368A==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="22604661" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/PitPik/colorPicker/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/PitPik/colorPicker/watchers"
            aria-label="19 users are watching this repository">
            19
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/unstar" class="starred" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5Qzz6xQZnOeCVGorUsRVpmpruwRnmwktPUe1ciJYij7AF6c1QcMhPnycrdiePFbWhJPVK481iTVczuI5rRLY8Q==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar PitPik/colorPicker"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/PitPik/colorPicker/stargazers"
           aria-label="235 users starred this repository">
          235
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/star" class="unstarred" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J+8D18bWo6KKoohfObgmO26DHPSuD5q3WohyglI3WA0bFxNLicSG/ew4h4BtA9jlXjpaEObb0QXKzxkmX6ksIg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star PitPik/colorPicker"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/PitPik/colorPicker/stargazers"
           aria-label="235 users starred this repository">
          235
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/fork" class="btn-with-count" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="I/f55N2RqVfccBPPK890rGXLa74CbgGdW+tcbNFIdf8KxYTmTjcflEVTR5ruZRh3yRCzo/ZgjAcWKpOudny4zw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of PitPik/colorPicker to your account"
                aria-label="Fork your own copy of PitPik/colorPicker to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/PitPik/colorPicker/network" class="social-count"
       aria-label="65 users are forked this repository">
      65
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/PitPik" class="url fn" rel="author">PitPik</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/PitPik/colorPicker" data-pjax="#js-repo-pjax-container">colorPicker</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/PitPik/colorPicker" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /PitPik/colorPicker" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/PitPik/colorPicker/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /PitPik/colorPicker/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">15</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/PitPik/colorPicker/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /PitPik/colorPicker/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/PitPik/colorPicker/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /PitPik/colorPicker/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/PitPik/colorPicker/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /PitPik/colorPicker/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/PitPik/colorPicker/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /PitPik/colorPicker/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/PitPik/colorPicker/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /PitPik/colorPicker/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/PitPik/colorPicker/blob/41d780c31fbe01d68e3c3e15e90d8d27d6935939/colors.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:311b07175d9ca094d76d486bc0b0b9ac -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/PitPik/colorPicker/blob/master/colors.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/PitPik/colorPicker/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/PitPik/colorPicker"><span>colorPicker</span></a></span></span><span class="separator">/</span><strong class="final-path">colors.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/PitPik/colorPicker/commit/0d55e45be65a65dc814cab25b9c3be71f668b5e4" data-pjax>
          0d55e45
        </a>
        <relative-time datetime="2016-05-18T13:18:51Z">May 18, 2016</relative-time>
      </span>
      <div>
        <img alt="@PitPik" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/628295?v=3&amp;s=40" width="20" />
        <a href="/PitPik" class="user-mention" rel="author">PitPik</a>
          <a href="/PitPik/colorPicker/commit/0d55e45be65a65dc814cab25b9c3be71f668b5e4" class="message" data-pjax="true" title="Minor updates / color2text method

- fixed positioning (appendTo different then document.body)
- added method color2text()
- minor optimizations">Minor updates / color2text method</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@PitPik" height="24" src="https://avatars2.githubusercontent.com/u/628295?v=3&amp;s=48" width="24" />
            <a href="/PitPik">PitPik</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/PitPik/colorPicker/raw/master/colors.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/PitPik/colorPicker/blame/master/colors.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/PitPik/colorPicker/commits/master/colors.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/PitPik/colorPicker?branch=master&amp;filepath=colors.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/edit/master/colors.js" class="inline-form js-update-url-with-hash" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dq41CABg4VTOjDn/uNqMnHMmwlSHFptrulcakqmq+hO6+51sf4/1+Y6DcZZMaC8kk3Im3RAqfclmhYLgSCTGbg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/PitPik/colorPicker/delete/master/colors.js" class="inline-form" data-form-nonce="52fbfb0fa49089115529b625363be39fe051e66e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+9AVuZHZGU5oS4vu369b4N4m4aibMM8nYX21C/0xFSRFjsXzWEfEal+Y1LLLGkkzayRuHgiLXGaibOSD8qaL8A==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      733 lines (624 sloc)
      <span class="file-info-divider"></span>
    22.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(<span class="pl-c1">window</span>, <span class="pl-c1">undefined</span>){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> _valueRanges <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">			rgb<span class="pl-k">:</span>   {r<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">255</span>], g<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">255</span>], b<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">255</span>]},</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">			hsv<span class="pl-k">:</span>   {h<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">360</span>], s<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], v<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>]},</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">			hsl<span class="pl-k">:</span>   {h<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">360</span>], s<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], l<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>]},</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">			cmy<span class="pl-k">:</span>   {c<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], m<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], y<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>]},</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">			cmyk<span class="pl-k">:</span>  {c<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], m<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], y<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], k<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>]},</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">			Lab<span class="pl-k">:</span>   {<span class="pl-c1">L</span><span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], a<span class="pl-k">:</span> [<span class="pl-k">-</span><span class="pl-c1">128</span>, <span class="pl-c1">127</span>], b<span class="pl-k">:</span> [<span class="pl-k">-</span><span class="pl-c1">128</span>, <span class="pl-c1">127</span>]},</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">XYZ</span><span class="pl-k">:</span>   {<span class="pl-c1">X</span><span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], <span class="pl-c1">Y</span><span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>], <span class="pl-c1">Z</span><span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">100</span>]},</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">			alpha<span class="pl-k">:</span> {alpha<span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">1</span>]},</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">HEX</span><span class="pl-k">:</span>   {<span class="pl-c1">HEX</span><span class="pl-k">:</span> [<span class="pl-c1">0</span>, <span class="pl-c1">16777215</span>]} <span class="pl-c">// maybe we don&#39;t need this</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">		_instance <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">		_colors <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html for more</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">		XYZMatrix <span class="pl-k">=</span> { <span class="pl-c">// Observer = 2° (CIE 1931), Illuminant = D65</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">X</span><span class="pl-k">:</span> [ <span class="pl-c1">0.4124564</span>,  <span class="pl-c1">0.3575761</span>,  <span class="pl-c1">0.1804375</span>],</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">Y</span><span class="pl-k">:</span> [ <span class="pl-c1">0.2126729</span>,  <span class="pl-c1">0.7151522</span>,  <span class="pl-c1">0.0721750</span>],</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">Z</span><span class="pl-k">:</span> [ <span class="pl-c1">0.0193339</span>,  <span class="pl-c1">0.1191920</span>,  <span class="pl-c1">0.9503041</span>],</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">R</span><span class="pl-k">:</span> [ <span class="pl-c1">3.2404542</span>, <span class="pl-k">-</span><span class="pl-c1">1.5371385</span>, <span class="pl-k">-</span><span class="pl-c1">0.4985314</span>],</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">G</span><span class="pl-k">:</span> [<span class="pl-k">-</span><span class="pl-c1">0.9692660</span>,  <span class="pl-c1">1.8760108</span>,  <span class="pl-c1">0.0415560</span>],</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">B</span><span class="pl-k">:</span> [ <span class="pl-c1">0.0556434</span>, <span class="pl-k">-</span><span class="pl-c1">0.2040259</span>,  <span class="pl-c1">1.0572252</span>]</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">		grey <span class="pl-k">=</span> {r<span class="pl-k">:</span> <span class="pl-c1">0.298954</span>, g<span class="pl-k">:</span> <span class="pl-c1">0.586434</span>, b<span class="pl-k">:</span> <span class="pl-c1">0.114612</span>}, <span class="pl-c">// CIE-XYZ 1931</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">		luminance <span class="pl-k">=</span> {r<span class="pl-k">:</span> <span class="pl-c1">0.2126</span>, g<span class="pl-k">:</span> <span class="pl-c1">0.7152</span>, b<span class="pl-k">:</span> <span class="pl-c1">0.0722</span>}, <span class="pl-c">// W3C 2.0</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">		_math <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">Math</span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">		_parseint <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">parseInt</span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		Colors <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-en">Colors</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-smi">colors</span> <span class="pl-k">=</span> {<span class="pl-c1">RND</span><span class="pl-k">:</span> {}};</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">				color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgba(204, 82, 37, 0.8)<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// init value(s)...</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">				XYZMatrix<span class="pl-k">:</span> XYZMatrix,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// XYZReference: {},</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">				grey<span class="pl-k">:</span> grey,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">				luminance<span class="pl-k">:</span> luminance,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">				valueRanges<span class="pl-k">:</span> _valueRanges</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// customBG: &#39;#808080&#39;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// convertCallback: undefined,</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// allMixDetails: false</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">initInstance</span>(<span class="pl-v">this</span>, options <span class="pl-k">||</span> {});</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">initInstance</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">THIS</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> matrix,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">				importColor,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">				_options <span class="pl-k">=</span> <span class="pl-c1">THIS</span>.<span class="pl-c1">options</span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">				customBG;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">focusInstance</span>(<span class="pl-c1">THIS</span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> option <span class="pl-k">in</span> options) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (options[option] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) _options[option] <span class="pl-k">=</span> options[option];</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">			matrix <span class="pl-k">=</span> <span class="pl-smi">_options</span>.<span class="pl-smi">XYZMatrix</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">options</span>.<span class="pl-smi">XYZReference</span>) <span class="pl-smi">_options</span>.<span class="pl-smi">XYZReference</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span><span class="pl-k">:</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">X</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">X</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">X</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span><span class="pl-k">:</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span><span class="pl-k">:</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-smi">matrix</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			customBG <span class="pl-k">=</span> <span class="pl-smi">_options</span>.<span class="pl-smi">customBG</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">_options</span>.<span class="pl-smi">customBG</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> customBG <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">txt2color</span>(customBG).<span class="pl-smi">rgb</span> <span class="pl-k">:</span> customBG;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">			_colors <span class="pl-k">=</span> <span class="pl-en">setColor</span>(<span class="pl-c1">THIS</span>.<span class="pl-smi">colors</span>, <span class="pl-smi">_options</span>.<span class="pl-c1">color</span>, <span class="pl-c1">undefined</span>, <span class="pl-c1">true</span>); <span class="pl-c">// THIS.colors = _colors =</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">focusInstance</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">THIS</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (_instance <span class="pl-k">!==</span> <span class="pl-c1">THIS</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">				_instance <span class="pl-k">=</span> <span class="pl-c1">THIS</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">				_colors <span class="pl-k">=</span> <span class="pl-c1">THIS</span>.<span class="pl-smi">colors</span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setColor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">newCol</span>, <span class="pl-smi">type</span>, <span class="pl-smi">alpha</span>) {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">focusInstance</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (newCol) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-en">setColor</span>(<span class="pl-v">this</span>.<span class="pl-smi">colors</span>, newCol, type, <span class="pl-c1">undefined</span>, alpha);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (alpha <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">colors</span>.<span class="pl-smi">alpha</span> <span class="pl-k">=</span> <span class="pl-en">limitValue</span>(alpha, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-en">convertColors</span>(type);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getColor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">colors</span>, n <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (type) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			type <span class="pl-k">=</span> <span class="pl-smi">type</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (result[type[n]]) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">				result <span class="pl-k">=</span> result[type[n<span class="pl-k">++</span>]];</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">type</span>.<span class="pl-c1">length</span> <span class="pl-k">!==</span> n) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">				result <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setCustomBackground</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">col</span>) { <span class="pl-c">// wild gues,... check again...</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">focusInstance</span>(<span class="pl-v">this</span>); <span class="pl-c">// needed???</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">customBG</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> col <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">txt2color</span>(col).<span class="pl-smi">rgb</span> <span class="pl-k">:</span> col;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// return setColor(this.colors, this.options.customBG, &#39;rgb&#39;, true); // !!!!RGB</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-en">setColor</span>(<span class="pl-v">this</span>.<span class="pl-smi">colors</span>, <span class="pl-c1">undefined</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// just recalculate existing</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">saveAsBackground</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-c">// alpha</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">focusInstance</span>(<span class="pl-v">this</span>); <span class="pl-c">// needed???</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// return setColor(this.colors, this.colors.RND.rgb, &#39;rgb&#39;, true);</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-en">setColor</span>(<span class="pl-v">this</span>.<span class="pl-smi">colors</span>, <span class="pl-c1">undefined</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">convertColor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">color</span>, <span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> convert <span class="pl-k">=</span> ColorConverter,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			ranges <span class="pl-k">=</span> _valueRanges,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			types <span class="pl-k">=</span> <span class="pl-smi">type</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			fromType <span class="pl-k">=</span> types[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			toType <span class="pl-k">=</span> types[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">			test <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(?:RG<span class="pl-k">|</span>HS<span class="pl-k">|</span>CM<span class="pl-k">|</span>LA)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			normalizeFrom <span class="pl-k">=</span> <span class="pl-smi">test</span>.<span class="pl-c1">test</span>(fromType),</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			normalizeTo <span class="pl-k">=</span> <span class="pl-smi">test</span>.<span class="pl-c1">test</span>(toType),</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			exceptions <span class="pl-k">=</span> {<span class="pl-c1">LAB</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Lab<span class="pl-pds">&#39;</span></span>},</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">normalize</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">color</span>, <span class="pl-smi">type</span>, <span class="pl-smi">reverse</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> result <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">					Lab <span class="pl-k">=</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Lab<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">in</span> color) { <span class="pl-c">// faster (but bigger) way: if/else outside 2 for loops</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">					result[n] <span class="pl-k">=</span> reverse <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">_math</span>.<span class="pl-en">round</span>(color[n] <span class="pl-k">*</span> (Lab <span class="pl-k">||</span> ranges[type][n][<span class="pl-c1">1</span>])) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">						color[n] <span class="pl-k">/</span> (Lab <span class="pl-k">||</span> ranges[type][n][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		fromType <span class="pl-k">=</span> ranges[fromType] <span class="pl-k">?</span> fromType <span class="pl-k">:</span> exceptions[fromType] <span class="pl-k">||</span> <span class="pl-smi">fromType</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		toType <span class="pl-k">=</span> ranges[toType] <span class="pl-k">?</span> toType <span class="pl-k">:</span> exceptions[toType] <span class="pl-k">||</span> <span class="pl-smi">toType</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (normalizeFrom <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>RGB2HEX<span class="pl-pds">&#39;</span></span>) { <span class="pl-c">// from ABC to abc</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			color <span class="pl-k">=</span> <span class="pl-en">normalize</span>(color, fromType);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		color <span class="pl-k">=</span> fromType <span class="pl-k">===</span> toType <span class="pl-k">?</span> color <span class="pl-k">:</span> ( <span class="pl-c">// same type; returns same/normalized version</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			convert[fromType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> toType] <span class="pl-k">?</span> convert[fromType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> toType](color, <span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-c">// existing converter</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">			toType <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>HEX<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-smi">convert</span>.<span class="pl-en">RGB2HEX</span>(type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>RGB2HEX<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> color <span class="pl-k">:</span> <span class="pl-en">normalize</span>(fromType <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> color <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">				convert[fromType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2rgb<span class="pl-pds">&#39;</span></span>](color, <span class="pl-c1">true</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>)) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			convert[<span class="pl-s"><span class="pl-pds">&#39;</span>rgb2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> toType](convert[fromType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2rgb<span class="pl-pds">&#39;</span></span>](color, <span class="pl-c1">true</span>), <span class="pl-c1">true</span>) <span class="pl-c">// not in ColorConverter</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (normalizeTo) { <span class="pl-c">// from abc to ABC</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			color <span class="pl-k">=</span> <span class="pl-en">normalize</span>(color, toType, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> color;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Colors</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">colorMode</span>, <span class="pl-smi">forceAlpha</span>) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">color2text</span>((colorMode <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>(), <span class="pl-v">this</span>.<span class="pl-smi">colors</span>, forceAlpha);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ------------------------------------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ---------- Color calculation related stuff  ---------- //</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// -------------------------------------------------------//</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">setColor</span>(<span class="pl-smi">colors</span>, <span class="pl-smi">color</span>, <span class="pl-smi">type</span>, <span class="pl-smi">save</span>, <span class="pl-smi">alpha</span>) { <span class="pl-c">// color only full range</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> color <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">txt2color</span>(color); <span class="pl-c">// new object</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">			type <span class="pl-k">=</span> <span class="pl-smi">color</span>.<span class="pl-c1">type</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">			_colors[type] <span class="pl-k">=</span> color[type];</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">			alpha <span class="pl-k">=</span> alpha <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> alpha <span class="pl-k">:</span> <span class="pl-smi">color</span>.<span class="pl-smi">alpha</span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (color) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">in</span> color) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">				colors[type][n] <span class="pl-k">=</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Lab<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">limitValue</span>(color[n], _valueRanges[type][n][<span class="pl-c1">0</span>], _valueRanges[type][n][<span class="pl-c1">1</span>]) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">limitValue</span>(color[n] <span class="pl-k">/</span> _valueRanges[type][n][<span class="pl-c1">1</span>], <span class="pl-c1">0</span> , <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (alpha <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">alpha</span> <span class="pl-k">=</span> <span class="pl-en">limitValue</span>(<span class="pl-k">+</span>alpha, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-en">convertColors</span>(type, save <span class="pl-k">?</span> colors <span class="pl-k">:</span> <span class="pl-c1">undefined</span>);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">saveAsBackground</span>(<span class="pl-c1">RGB</span>, <span class="pl-smi">rgb</span>, <span class="pl-smi">alpha</span>) {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> grey <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">grey</span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			color <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-c1">RGB</span> <span class="pl-k">=</span> {r<span class="pl-k">:</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">r</span>, g<span class="pl-k">:</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span>, b<span class="pl-k">:</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span>};</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">rgb</span> <span class="pl-k">=</span> {r<span class="pl-k">:</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">r</span>, g<span class="pl-k">:</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">g</span>, b<span class="pl-k">:</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">b</span>};</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">alpha</span> <span class="pl-k">=</span> alpha;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// color.RGBLuminance = getLuminance(RGB);</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">equivalentGrey</span> <span class="pl-k">=</span> <span class="pl-smi">_math</span>.<span class="pl-en">round</span>(<span class="pl-smi">grey</span>.<span class="pl-smi">r</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">r</span> <span class="pl-k">+</span> <span class="pl-smi">grey</span>.<span class="pl-smi">g</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span> <span class="pl-k">+</span> <span class="pl-smi">grey</span>.<span class="pl-smi">b</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span>);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixBlack</span> <span class="pl-k">=</span> <span class="pl-en">mixColors</span>(rgb, {r<span class="pl-k">:</span> <span class="pl-c1">0</span>, g<span class="pl-k">:</span> <span class="pl-c1">0</span>, b<span class="pl-k">:</span> <span class="pl-c1">0</span>}, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixWhite</span> <span class="pl-k">=</span> <span class="pl-en">mixColors</span>(rgb, {r<span class="pl-k">:</span> <span class="pl-c1">1</span>, g<span class="pl-k">:</span> <span class="pl-c1">1</span>, b<span class="pl-k">:</span> <span class="pl-c1">1</span>}, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixBlack</span>.<span class="pl-smi">luminance</span> <span class="pl-k">=</span> <span class="pl-en">getLuminance</span>(<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixBlack</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixWhite</span>.<span class="pl-smi">luminance</span> <span class="pl-k">=</span> <span class="pl-en">getLuminance</span>(<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixWhite</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">customBG</span>) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixCustom</span> <span class="pl-k">=</span> <span class="pl-en">mixColors</span>(rgb, <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">customBG</span>, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixCustom</span>.<span class="pl-smi">luminance</span> <span class="pl-k">=</span> <span class="pl-en">getLuminance</span>(<span class="pl-smi">color</span>.<span class="pl-smi">rgbaMixCustom</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">customBG</span>.<span class="pl-smi">luminance</span> <span class="pl-k">=</span> <span class="pl-en">getLuminance</span>(<span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">customBG</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> color;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">convertColors</span>(<span class="pl-smi">type</span>, <span class="pl-smi">colorObj</span>) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// console.time(&#39;convertColors&#39;);</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">			colors <span class="pl-k">=</span> colorObj <span class="pl-k">||</span> _colors,</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">			convert <span class="pl-k">=</span> ColorConverter,</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">			options <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">			ranges <span class="pl-k">=</span> _valueRanges,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">RND</span> <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-c1">RND</span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// type = colorType, // || _mode.type,</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			modes, mode <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, from <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c">// value = &#39;&#39;,</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			exceptions <span class="pl-k">=</span> {hsl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hsv<span class="pl-pds">&#39;</span></span>, cmyk<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>cmy<span class="pl-pds">&#39;</span></span>, rgb<span class="pl-k">:</span> type},</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">RGB</span> <span class="pl-k">=</span> <span class="pl-c1">RND</span>.<span class="pl-smi">rgb</span>, <span class="pl-c1">SAVE</span>, <span class="pl-c1">SMART</span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (type <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>alpha<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> typ <span class="pl-k">in</span> ranges) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>ranges[typ][typ]) { <span class="pl-c">// no alpha|HEX</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (type <span class="pl-k">!==</span> typ <span class="pl-k">&amp;&amp;</span> typ <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>XYZ<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">						from <span class="pl-k">=</span> exceptions[typ] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">						colors[typ] <span class="pl-k">=</span> convert[from <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> typ](colors[from]);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">RND</span>[typ]) <span class="pl-c1">RND</span>[typ] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">					modes <span class="pl-k">=</span> colors[typ];</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(mode <span class="pl-k">in</span> modes) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">RND</span>[typ][mode] <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">round</span>(modes[mode] <span class="pl-k">*</span> (typ <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Lab<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> ranges[typ][mode][<span class="pl-c1">1</span>]));</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (type <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Lab<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-smi">colors</span>.<span class="pl-smi">_rgb</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">RGB</span> <span class="pl-k">=</span> <span class="pl-c1">RND</span>.<span class="pl-smi">rgb</span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-c1">HEX</span> <span class="pl-k">=</span> <span class="pl-smi">convert</span>.<span class="pl-en">RGB2HEX</span>(<span class="pl-c1">RGB</span>);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">equivalentGrey</span> <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">options</span>.<span class="pl-smi">grey</span>.<span class="pl-smi">r</span> <span class="pl-k">*</span> <span class="pl-smi">colors</span>.<span class="pl-smi">rgb</span>.<span class="pl-smi">r</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">options</span>.<span class="pl-smi">grey</span>.<span class="pl-smi">g</span> <span class="pl-k">*</span> <span class="pl-smi">colors</span>.<span class="pl-smi">rgb</span>.<span class="pl-smi">g</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">options</span>.<span class="pl-smi">grey</span>.<span class="pl-smi">b</span> <span class="pl-k">*</span> <span class="pl-smi">colors</span>.<span class="pl-smi">rgb</span>.<span class="pl-smi">b</span>;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">webSave</span> <span class="pl-k">=</span> <span class="pl-c1">SAVE</span> <span class="pl-k">=</span> <span class="pl-en">getClosestWebColor</span>(<span class="pl-c1">RGB</span>, <span class="pl-c1">51</span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// colors.webSave.HEX = convert.RGB2HEX(colors.webSave);</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">webSmart</span> <span class="pl-k">=</span> <span class="pl-c1">SMART</span> <span class="pl-k">=</span> <span class="pl-en">getClosestWebColor</span>(<span class="pl-c1">RGB</span>, <span class="pl-c1">17</span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// colors.webSmart.HEX = convert.RGB2HEX(colors.webSmart);</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">saveColor</span> <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">RGB</span>.<span class="pl-smi">r</span> <span class="pl-k">===</span> <span class="pl-c1">SAVE</span>.<span class="pl-smi">r</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span> <span class="pl-k">===</span> <span class="pl-c1">SAVE</span>.<span class="pl-smi">g</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> <span class="pl-c1">SAVE</span>.<span class="pl-smi">b</span>  <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>web save<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">RGB</span>.<span class="pl-smi">r</span> <span class="pl-k">===</span> <span class="pl-c1">SMART</span>.<span class="pl-smi">r</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span> <span class="pl-k">===</span> <span class="pl-c1">SMART</span>.<span class="pl-smi">g</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> <span class="pl-c1">SMART</span>.<span class="pl-smi">b</span>  <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>web smart<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">hueRGB</span> <span class="pl-k">=</span> <span class="pl-smi">convert</span>.<span class="pl-en">hue2RGB</span>(<span class="pl-smi">colors</span>.<span class="pl-smi">hsv</span>.<span class="pl-smi">h</span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (colorObj) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">colors</span>.<span class="pl-c1">background</span> <span class="pl-k">=</span> <span class="pl-en">saveAsBackground</span>(<span class="pl-c1">RGB</span>, <span class="pl-smi">colors</span>.<span class="pl-smi">rgb</span>, <span class="pl-smi">colors</span>.<span class="pl-smi">alpha</span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">		} <span class="pl-c">// else RGB = RND.rgb;</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> rgb <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-smi">rgb</span>, <span class="pl-c">// for better minification...</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">			alpha <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-smi">alpha</span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			luminance <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>luminance<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">			background <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-c1">background</span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			rgbaMixBlack, rgbaMixWhite, rgbaMixCustom,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">			rgbaMixBG, rgbaMixBGMixBlack, rgbaMixBGMixWhite, rgbaMixBGMixCustom,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">			_mixColors <span class="pl-k">=</span> mixColors,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">			_getLuminance <span class="pl-k">=</span> getLuminance,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">			_getWCAG2Ratio <span class="pl-k">=</span> getWCAG2Ratio,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			_getHueDelta <span class="pl-k">=</span> getHueDelta;</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		rgbaMixBlack <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, {r<span class="pl-k">:</span> <span class="pl-c1">0</span>, g<span class="pl-k">:</span> <span class="pl-c1">0</span>, b<span class="pl-k">:</span> <span class="pl-c1">0</span>}, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		rgbaMixBlack[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixBlack, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixBlack</span> <span class="pl-k">=</span> rgbaMixBlack;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">		rgbaMixWhite <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, {r<span class="pl-k">:</span> <span class="pl-c1">1</span>, g<span class="pl-k">:</span> <span class="pl-c1">1</span>, b<span class="pl-k">:</span> <span class="pl-c1">1</span>}, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">		rgbaMixWhite[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixWhite, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixWhite</span> <span class="pl-k">=</span> rgbaMixWhite;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">allMixDetails</span>) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBlack</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixBlack[luminance], <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixWhite</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixWhite[luminance], <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">customBG</span>) {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">				rgbaMixCustom <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, <span class="pl-smi">options</span>.<span class="pl-smi">customBG</span>, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">				rgbaMixCustom[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixCustom, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">rgbaMixCustom</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixCustom[luminance], <span class="pl-smi">options</span>.<span class="pl-smi">customBG</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixCustom</span> <span class="pl-k">=</span> rgbaMixCustom;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">			rgbaMixBG <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, <span class="pl-smi">background</span>.<span class="pl-smi">rgb</span>, alpha, <span class="pl-smi">background</span>.<span class="pl-smi">alpha</span>);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">			rgbaMixBG[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixBG, <span class="pl-c1">true</span>); <span class="pl-c">// ?? do we need this?</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixBG</span> <span class="pl-k">=</span> rgbaMixBG;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixBlack <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixBlack</span>, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixBlack[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixBGMixBlack, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixBlack</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixBGMixBlack[luminance],</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixBlack</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixBlack</span>.<span class="pl-smi">luminanceDelta</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">abs</span>(</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">				rgbaMixBGMixBlack[luminance] <span class="pl-k">-</span> <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixBlack</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixBlack</span>.<span class="pl-smi">hueDelta</span> <span class="pl-k">=</span> <span class="pl-en">_getHueDelta</span>(<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixBlack</span>, rgbaMixBGMixBlack, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixBGMixBlack</span> <span class="pl-k">=</span> rgbaMixBGMixBlack;</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixWhite <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixWhite</span>, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixWhite[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixBGMixWhite, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixWhite</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixBGMixWhite[luminance],</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixWhite</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixWhite</span>.<span class="pl-smi">luminanceDelta</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">abs</span>(</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				rgbaMixBGMixWhite[luminance] <span class="pl-k">-</span> <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixWhite</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixWhite</span>.<span class="pl-smi">hueDelta</span> <span class="pl-k">=</span> <span class="pl-en">_getHueDelta</span>(<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixWhite</span>, rgbaMixBGMixWhite, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixBGMixWhite</span> <span class="pl-k">=</span> rgbaMixBGMixWhite;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">customBG</span>) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixCustom <span class="pl-k">=</span> <span class="pl-en">_mixColors</span>(rgb, <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixCustom</span>, alpha, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">			rgbaMixBGMixCustom[luminance] <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(rgbaMixBGMixCustom, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixCustom</span>.<span class="pl-smi">WCAG2Ratio</span> <span class="pl-k">=</span> <span class="pl-en">_getWCAG2Ratio</span>(rgbaMixBGMixCustom[luminance],</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixCustom</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">colors</span>.<span class="pl-smi">rgbaMixBGMixCustom</span> <span class="pl-k">=</span> rgbaMixBGMixCustom;</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixCustom</span>.<span class="pl-smi">luminanceDelta</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">abs</span>(</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">				rgbaMixBGMixCustom[luminance] <span class="pl-k">-</span> <span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixCustom</span>[luminance]);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">rgbaMixBGMixCustom</span>.<span class="pl-smi">hueDelta</span> <span class="pl-k">=</span> <span class="pl-en">_getHueDelta</span>(<span class="pl-smi">background</span>.<span class="pl-smi">rgbaMixCustom</span>, rgbaMixBGMixCustom, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* ------ */</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">colors</span>.<span class="pl-smi">RGBLuminance</span> <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(<span class="pl-c1">RGB</span>);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">colors</span>.<span class="pl-smi">HUELuminance</span> <span class="pl-k">=</span> <span class="pl-en">_getLuminance</span>(<span class="pl-smi">colors</span>.<span class="pl-smi">hueRGB</span>);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// renderVars.readyToRender = true;</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">convertCallback</span>) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">options</span>.<span class="pl-en">convertCallback</span>(colors, type); <span class="pl-c">//, convert); //, _mode);</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// console.timeEnd(&#39;convertColors&#39;)</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// if (colorObj)</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> colors;</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ------------------------------------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ------------------ color conversion ------------------ //</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// -------------------------------------------------------//</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ColorConverter <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">txt2color</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">txt</span>) {</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> color <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">				parts <span class="pl-k">=</span> <span class="pl-smi">txt</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:#<span class="pl-k">|</span><span class="pl-cce">\)</span><span class="pl-k">|</span>%)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">				values <span class="pl-k">=</span> (parts[<span class="pl-c1">1</span>] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">				type <span class="pl-k">=</span> parts[<span class="pl-c1">1</span>] <span class="pl-k">?</span> parts[<span class="pl-c1">0</span>].<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">3</span>) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">				m <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">color</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> type;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">			color[type] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (parts[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-c1">3</span>; n<span class="pl-k">--</span>; ) {</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">					m <span class="pl-k">=</span> type[n] <span class="pl-k">||</span> <span class="pl-smi">type</span>.<span class="pl-c1">charAt</span>(n); <span class="pl-c">// IE7</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">					color[type][m] <span class="pl-k">=</span> <span class="pl-k">+</span>values[n] <span class="pl-k">/</span> _valueRanges[type][m][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">color</span>.<span class="pl-smi">rgb</span> <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">HEX2rgb</span>(parts[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// color.color = color[type];</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">color</span>.<span class="pl-smi">alpha</span> <span class="pl-k">=</span> values[<span class="pl-c1">3</span>] <span class="pl-k">?</span> <span class="pl-k">+</span>values[<span class="pl-c1">3</span>] <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> color;</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">color2text</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">colorMode</span>, <span class="pl-smi">colors</span>, <span class="pl-smi">forceAlpha</span>) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> alpha <span class="pl-k">=</span> forceAlpha <span class="pl-k">!==</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_math</span>.<span class="pl-en">round</span>(<span class="pl-smi">colors</span>.<span class="pl-smi">alpha</span> <span class="pl-k">*</span> <span class="pl-c1">100</span>) <span class="pl-k">/</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">				hasAlpha <span class="pl-k">=</span> <span class="pl-k">typeof</span> alpha <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">					forceAlpha <span class="pl-k">!==</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> (forceAlpha <span class="pl-k">||</span> alpha <span class="pl-k">!==</span> <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">RGB</span> <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-c1">RND</span>.<span class="pl-smi">rgb</span>,</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">HSL</span> <span class="pl-k">=</span> <span class="pl-smi">colors</span>.<span class="pl-c1">RND</span>.<span class="pl-smi">hsl</span>,</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">				shouldBeHex <span class="pl-k">=</span> colorMode <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hex<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> hasAlpha,</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">				isHex <span class="pl-k">=</span> colorMode <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hex<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>shouldBeHex,</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">				isRgb <span class="pl-k">=</span> colorMode <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> shouldBeHex,</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">				innerText <span class="pl-k">=</span> isRgb <span class="pl-k">?</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">r</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">!</span>isHex <span class="pl-k">?</span> <span class="pl-c1">HSL</span>.<span class="pl-smi">h</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">HSL</span>.<span class="pl-smi">s</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">HSL</span>.<span class="pl-smi">l</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">colors</span>.<span class="pl-c1">HEX</span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> isHex <span class="pl-k">?</span> innerText <span class="pl-k">:</span> (shouldBeHex <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> colorMode) <span class="pl-k">+</span> </td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">					(hasAlpha <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> innerText <span class="pl-k">+</span> (hasAlpha <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> alpha <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">RGB2HEX</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">RGB</span>) {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">				(<span class="pl-c1">RGB</span>.<span class="pl-smi">r</span> <span class="pl-k">&lt;</span> <span class="pl-c1">16</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">r</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				(<span class="pl-c1">RGB</span>.<span class="pl-smi">g</span> <span class="pl-k">&lt;</span> <span class="pl-c1">16</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">g</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">				(<span class="pl-c1">RGB</span>.<span class="pl-smi">b</span> <span class="pl-k">&lt;</span> <span class="pl-c1">16</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">RGB</span>.<span class="pl-smi">b</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>)</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			).<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">HEX2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">HEX</span>) {</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">HEX</span> <span class="pl-k">=</span> <span class="pl-c1">HEX</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>); <span class="pl-c">// IE7</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> <span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>0x<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">HEX</span>[<span class="pl-c1">3</span>] <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>]) <span class="pl-k">/</span> <span class="pl-c1">255</span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> <span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>0x<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">HEX</span>[<span class="pl-c1">3</span>] <span class="pl-k">?</span> <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>] <span class="pl-k">+</span> (<span class="pl-c1">HEX</span>[<span class="pl-c1">3</span>] <span class="pl-k">||</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">1</span>])) <span class="pl-k">/</span> <span class="pl-c1">255</span>,</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> <span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>0x<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">HEX</span>[<span class="pl-c1">4</span>] <span class="pl-k">||</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">2</span>]) <span class="pl-k">+</span> (<span class="pl-c1">HEX</span>[<span class="pl-c1">5</span>] <span class="pl-k">||</span> <span class="pl-c1">HEX</span>[<span class="pl-c1">2</span>])) <span class="pl-k">/</span> <span class="pl-c1">255</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hue2RGB</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">hue</span>) {</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">				h <span class="pl-k">=</span> hue <span class="pl-k">*</span> <span class="pl-c1">6</span>,</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				mod <span class="pl-k">=</span> <span class="pl-k">~~</span>h <span class="pl-k">%</span> <span class="pl-c1">6</span>, <span class="pl-c">// Math.floor(h) -&gt; faster in most browsers</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">				i <span class="pl-k">=</span> h <span class="pl-k">===</span> <span class="pl-c1">6</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> (h <span class="pl-k">-</span> mod);</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> <span class="pl-smi">_Math</span>.<span class="pl-en">round</span>([<span class="pl-c1">1</span>, <span class="pl-c1">1</span> <span class="pl-k">-</span> i, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, i, <span class="pl-c1">1</span>][mod] <span class="pl-k">*</span> <span class="pl-c1">255</span>),</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> <span class="pl-smi">_Math</span>.<span class="pl-en">round</span>([i, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span> <span class="pl-k">-</span> i, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>][mod] <span class="pl-k">*</span> <span class="pl-c1">255</span>),</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> <span class="pl-smi">_Math</span>.<span class="pl-en">round</span>([<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, i, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span> <span class="pl-k">-</span> i][mod] <span class="pl-k">*</span> <span class="pl-c1">255</span>)</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// ------------------------ HSV ------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2hsv</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>) { <span class="pl-c">// faster</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				r <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">r</span>,</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">				g <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">g</span>,</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">				b <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">b</span>,</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				k <span class="pl-k">=</span> <span class="pl-c1">0</span>, chroma, min, s;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (g <span class="pl-k">&lt;</span> b) {</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">				g <span class="pl-k">=</span> b <span class="pl-k">+</span> (b <span class="pl-k">=</span> g, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">				k <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			min <span class="pl-k">=</span> b;</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (r <span class="pl-k">&lt;</span> g) {</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">				r <span class="pl-k">=</span> g <span class="pl-k">+</span> (g <span class="pl-k">=</span> r, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">				k <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">2</span> <span class="pl-k">/</span> <span class="pl-c1">6</span> <span class="pl-k">-</span> k;</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				min <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">min</span>(g, b); <span class="pl-c">// g &lt; b ? g : b; ???</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">			chroma <span class="pl-k">=</span> r <span class="pl-k">-</span> min;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">			s <span class="pl-k">=</span> r <span class="pl-k">?</span> (chroma <span class="pl-k">/</span> r) <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">				h<span class="pl-k">:</span> s <span class="pl-k">&lt;</span> <span class="pl-c1">1e-15</span> <span class="pl-k">?</span> ((_colors <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsl</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsl</span>.<span class="pl-smi">h</span>) <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">					chroma <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">abs</span>(k <span class="pl-k">+</span> (g <span class="pl-k">-</span> b) <span class="pl-k">/</span> (<span class="pl-c1">6</span> <span class="pl-k">*</span> chroma)) <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">				s<span class="pl-k">:</span> r <span class="pl-k">?</span> (chroma <span class="pl-k">/</span> r) <span class="pl-k">:</span> ((_colors <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsv</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsv</span>.<span class="pl-smi">s</span>) <span class="pl-k">||</span> <span class="pl-c1">0</span>), <span class="pl-c">// ??_colors.hsv.s || 0</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">				v<span class="pl-k">:</span> r</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hsv2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">hsv</span>) {</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> h <span class="pl-k">=</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">h</span> <span class="pl-k">*</span> <span class="pl-c1">6</span>,</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">				s <span class="pl-k">=</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">s</span>,</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">				v <span class="pl-k">=</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">v</span>,</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">				i <span class="pl-k">=</span> <span class="pl-k">~~</span>h, <span class="pl-c">// Math.floor(h) -&gt; faster in most browsers</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">				f <span class="pl-k">=</span> h <span class="pl-k">-</span> i,</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">				p <span class="pl-k">=</span> v <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> s),</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">				q <span class="pl-k">=</span> v <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> f <span class="pl-k">*</span> s),</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">				t <span class="pl-k">=</span> v <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> f) <span class="pl-k">*</span> s),</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">				mod <span class="pl-k">=</span> i <span class="pl-k">%</span> <span class="pl-c1">6</span>;</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> [v, q, p, p, t, v][mod],</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> [t, v, v, q, p, p][mod],</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> [p, p, t, v, v, q][mod]</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// ------------------------ HSL ------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hsv2hsl</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">hsv</span>) {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> l <span class="pl-k">=</span> (<span class="pl-c1">2</span> <span class="pl-k">-</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">s</span>) <span class="pl-k">*</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">v</span>,</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">				s <span class="pl-k">=</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">s</span> <span class="pl-k">*</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">v</span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">			s <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-smi">hsv</span>.<span class="pl-smi">s</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> l <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> (l <span class="pl-k">?</span> s <span class="pl-k">/</span> l <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">:</span> s <span class="pl-k">/</span> (<span class="pl-c1">2</span> <span class="pl-k">-</span> l);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">				h<span class="pl-k">:</span> <span class="pl-smi">hsv</span>.<span class="pl-smi">h</span>,</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">				s<span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-smi">hsv</span>.<span class="pl-smi">v</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>s <span class="pl-k">?</span> ((_colors <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsl</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_colors</span>.<span class="pl-smi">hsl</span>.<span class="pl-smi">s</span>) <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">:</span> s, <span class="pl-c">// ???</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">				l<span class="pl-k">:</span> l <span class="pl-k">/</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2hsl</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>, <span class="pl-smi">dependent</span>) { <span class="pl-c">// not used in Color</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> hsv <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">rgb2hsv</span>(rgb);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">hsv2hsl</span>(dependent <span class="pl-k">?</span> hsv <span class="pl-k">:</span> (<span class="pl-smi">_colors</span>.<span class="pl-smi">hsv</span> <span class="pl-k">=</span> hsv));</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hsl2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">hsl</span>) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> h <span class="pl-k">=</span> <span class="pl-smi">hsl</span>.<span class="pl-smi">h</span> <span class="pl-k">*</span> <span class="pl-c1">6</span>,</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">				s <span class="pl-k">=</span> <span class="pl-smi">hsl</span>.<span class="pl-smi">s</span>,</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">				l <span class="pl-k">=</span> <span class="pl-smi">hsl</span>.<span class="pl-smi">l</span>,</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">				v <span class="pl-k">=</span> l <span class="pl-k">&lt;</span> <span class="pl-c1">0.5</span> <span class="pl-k">?</span> l <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">+</span> s) <span class="pl-k">:</span> (l <span class="pl-k">+</span> s) <span class="pl-k">-</span> (s <span class="pl-k">*</span> l),</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">				m <span class="pl-k">=</span> l <span class="pl-k">+</span> l <span class="pl-k">-</span> v,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">				sv <span class="pl-k">=</span> v <span class="pl-k">?</span> ((v <span class="pl-k">-</span> m) <span class="pl-k">/</span> v) <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">				sextant <span class="pl-k">=</span> <span class="pl-k">~~</span>h, <span class="pl-c">// Math.floor(h) -&gt; faster in most browsers</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">				fract <span class="pl-k">=</span> h <span class="pl-k">-</span> sextant,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">				vsf <span class="pl-k">=</span> v <span class="pl-k">*</span> sv <span class="pl-k">*</span> fract,</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">				t <span class="pl-k">=</span> m <span class="pl-k">+</span> vsf,</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">				q <span class="pl-k">=</span> v <span class="pl-k">-</span> vsf,</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">				mod <span class="pl-k">=</span> sextant <span class="pl-k">%</span> <span class="pl-c1">6</span>;</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> [v, q, m, m, t, v][mod],</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> [t, v, v, q, m, m][mod],</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> [m, m, t, v, v, q][mod]</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// ------------------------ CMYK ------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Quote from Wikipedia:</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// &quot;Since RGB and CMYK spaces are both device-dependent spaces, there is no</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// simple or general conversion formula that converts between them.</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Conversions are generally done through color management systems, using</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// color profiles that describe the spaces being converted. Nevertheless, the</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// conversions cannot be exact, since these spaces have very different gamuts.&quot;</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Translation: the following are just simple RGB to CMY(K) and visa versa conversion functions.</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2cmy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				c<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">r</span>,</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">				m<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">g</span>,</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">				y<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">b</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cmy2cmyk</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">cmy</span>) {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">				k <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">min</span>(<span class="pl-smi">_Math</span>.<span class="pl-en">min</span>(<span class="pl-smi">cmy</span>.<span class="pl-smi">c</span>, <span class="pl-smi">cmy</span>.<span class="pl-smi">m</span>), <span class="pl-smi">cmy</span>.<span class="pl-c1">y</span>),</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">				t <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> k <span class="pl-k">||</span> <span class="pl-c1">1e-20</span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> { <span class="pl-c">// regular</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">				c<span class="pl-k">:</span> (<span class="pl-smi">cmy</span>.<span class="pl-smi">c</span> <span class="pl-k">-</span> k) <span class="pl-k">/</span> t,</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">				m<span class="pl-k">:</span> (<span class="pl-smi">cmy</span>.<span class="pl-smi">m</span> <span class="pl-k">-</span> k) <span class="pl-k">/</span> t,</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">				y<span class="pl-k">:</span> (<span class="pl-smi">cmy</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> k) <span class="pl-k">/</span> t,</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">				k<span class="pl-k">:</span> k</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cmyk2cmy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">cmyk</span>) {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> k <span class="pl-k">=</span> <span class="pl-smi">cmyk</span>.<span class="pl-smi">k</span>;</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> { <span class="pl-c">// regular</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">				c<span class="pl-k">:</span> <span class="pl-smi">cmyk</span>.<span class="pl-smi">c</span> <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> k) <span class="pl-k">+</span> k,</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">				m<span class="pl-k">:</span> <span class="pl-smi">cmyk</span>.<span class="pl-smi">m</span> <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> k) <span class="pl-k">+</span> k,</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">				y<span class="pl-k">:</span> <span class="pl-smi">cmyk</span>.<span class="pl-c1">y</span> <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> k) <span class="pl-k">+</span> k</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cmy2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">cmy</span>) {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">cmy</span>.<span class="pl-smi">c</span>,</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">cmy</span>.<span class="pl-smi">m</span>,</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-smi">cmy</span>.<span class="pl-c1">y</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2cmyk</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>, <span class="pl-smi">dependent</span>) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> cmy <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">rgb2cmy</span>(rgb); <span class="pl-c">// doppelt??</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">cmy2cmyk</span>(dependent <span class="pl-k">?</span> cmy <span class="pl-k">:</span> (<span class="pl-smi">_colors</span>.<span class="pl-smi">cmy</span> <span class="pl-k">=</span> cmy));</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cmyk2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">cmyk</span>, <span class="pl-smi">dependent</span>) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> cmy <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">cmyk2cmy</span>(cmyk); <span class="pl-c">// doppelt??</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">cmy2rgb</span>(dependent <span class="pl-k">?</span> cmy <span class="pl-k">:</span> (<span class="pl-smi">_colors</span>.<span class="pl-smi">cmy</span> <span class="pl-k">=</span> cmy));</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// ------------------------ LAB ------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">XYZ2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XYZ</span>, <span class="pl-smi">skip</span>) {</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">M</span> <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">XYZMatrix</span>,</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">X</span>,</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">Y</span>,</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">Z</span>,</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">				r <span class="pl-k">=</span> <span class="pl-c1">X</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">R</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-c1">Y</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">R</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-c1">Z</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">R</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">				g <span class="pl-k">=</span> <span class="pl-c1">X</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">G</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-c1">Y</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">G</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-c1">Z</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">G</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">				b <span class="pl-k">=</span> <span class="pl-c1">X</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">B</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-c1">Y</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">B</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-c1">Z</span> <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">B</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">N</span> <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-c1">2.4</span>;</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">M</span> <span class="pl-k">=</span> <span class="pl-c1">0.0031308</span>;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> (r <span class="pl-k">&gt;</span> <span class="pl-c1">M</span> <span class="pl-k">?</span> <span class="pl-c1">1.055</span> <span class="pl-k">*</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(r, <span class="pl-c1">N</span>) <span class="pl-k">-</span> <span class="pl-c1">0.055</span> <span class="pl-k">:</span> <span class="pl-c1">12.92</span> <span class="pl-k">*</span> r);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> (g <span class="pl-k">&gt;</span> <span class="pl-c1">M</span> <span class="pl-k">?</span> <span class="pl-c1">1.055</span> <span class="pl-k">*</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(g, <span class="pl-c1">N</span>) <span class="pl-k">-</span> <span class="pl-c1">0.055</span> <span class="pl-k">:</span> <span class="pl-c1">12.92</span> <span class="pl-k">*</span> g);</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> (b <span class="pl-k">&gt;</span> <span class="pl-c1">M</span> <span class="pl-k">?</span> <span class="pl-c1">1.055</span> <span class="pl-k">*</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(b, <span class="pl-c1">N</span>) <span class="pl-k">-</span> <span class="pl-c1">0.055</span> <span class="pl-k">:</span> <span class="pl-c1">12.92</span> <span class="pl-k">*</span> b);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>skip) { <span class="pl-c">// out of gammut</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">_colors</span>.<span class="pl-smi">_rgb</span> <span class="pl-k">=</span> {r<span class="pl-k">:</span> r, g<span class="pl-k">:</span> g, b<span class="pl-k">:</span> b};</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">				r<span class="pl-k">:</span> <span class="pl-en">limitValue</span>(r, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">				g<span class="pl-k">:</span> <span class="pl-en">limitValue</span>(g, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> <span class="pl-en">limitValue</span>(b, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2XYZ</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">M</span> <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">XYZMatrix</span>,</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">				r <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">r</span>,</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">				g <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">g</span>,</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">				b <span class="pl-k">=</span> <span class="pl-smi">rgb</span>.<span class="pl-smi">b</span>,</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">N</span> <span class="pl-k">=</span> <span class="pl-c1">0.04045</span>;</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> (r <span class="pl-k">&gt;</span> <span class="pl-c1">N</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>((r <span class="pl-k">+</span> <span class="pl-c1">0.055</span>) <span class="pl-k">/</span> <span class="pl-c1">1.055</span>, <span class="pl-c1">2.4</span>) <span class="pl-k">:</span> r <span class="pl-k">/</span> <span class="pl-c1">12.92</span>);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> (g <span class="pl-k">&gt;</span> <span class="pl-c1">N</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>((g <span class="pl-k">+</span> <span class="pl-c1">0.055</span>) <span class="pl-k">/</span> <span class="pl-c1">1.055</span>, <span class="pl-c1">2.4</span>) <span class="pl-k">:</span> g <span class="pl-k">/</span> <span class="pl-c1">12.92</span>);</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> (b <span class="pl-k">&gt;</span> <span class="pl-c1">N</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>((b <span class="pl-k">+</span> <span class="pl-c1">0.055</span>) <span class="pl-k">/</span> <span class="pl-c1">1.055</span>, <span class="pl-c1">2.4</span>) <span class="pl-k">:</span> b <span class="pl-k">/</span> <span class="pl-c1">12.92</span>);</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span><span class="pl-k">:</span> r <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">X</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> g <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">X</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> b <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">X</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span><span class="pl-k">:</span> r <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> g <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> b <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Y</span>[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span><span class="pl-k">:</span> r <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> g <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> b <span class="pl-k">*</span> <span class="pl-c1">M</span>.<span class="pl-c1">Z</span>[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">XYZ2Lab</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XYZ</span>) {</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">R</span> <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">XYZReference</span>,</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">X</span> <span class="pl-k">/</span> <span class="pl-c1">R</span>.<span class="pl-c1">X</span>,</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">Y</span> <span class="pl-k">/</span> <span class="pl-c1">R</span>.<span class="pl-c1">Y</span>,</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>.<span class="pl-c1">Z</span> <span class="pl-k">/</span> <span class="pl-c1">R</span>.<span class="pl-c1">Z</span>,</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">N</span> <span class="pl-k">=</span> <span class="pl-c1">16</span> <span class="pl-k">/</span> <span class="pl-c1">116</span>, <span class="pl-c1">M</span> <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-c1">3</span>, <span class="pl-c1">K</span> <span class="pl-k">=</span> <span class="pl-c1">0.008856</span>, <span class="pl-c1">L</span> <span class="pl-k">=</span> <span class="pl-c1">7.787037</span>;</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">X</span> <span class="pl-k">=</span> <span class="pl-c1">X</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">X</span>, <span class="pl-c1">M</span>) <span class="pl-k">:</span> (<span class="pl-c1">L</span> <span class="pl-k">*</span> <span class="pl-c1">X</span>) <span class="pl-k">+</span> <span class="pl-c1">N</span>;</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">Y</span> <span class="pl-k">=</span> <span class="pl-c1">Y</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">Y</span>, <span class="pl-c1">M</span>) <span class="pl-k">:</span> (<span class="pl-c1">L</span> <span class="pl-k">*</span> <span class="pl-c1">Y</span>) <span class="pl-k">+</span> <span class="pl-c1">N</span>;</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">Z</span> <span class="pl-k">=</span> <span class="pl-c1">Z</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">Z</span>, <span class="pl-c1">M</span>) <span class="pl-k">:</span> (<span class="pl-c1">L</span> <span class="pl-k">*</span> <span class="pl-c1">Z</span>) <span class="pl-k">+</span> <span class="pl-c1">N</span>;</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">L</span><span class="pl-k">:</span> (<span class="pl-c1">116</span> <span class="pl-k">*</span> <span class="pl-c1">Y</span>) <span class="pl-k">-</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">				a<span class="pl-k">:</span> <span class="pl-c1">500</span> <span class="pl-k">*</span> (<span class="pl-c1">X</span> <span class="pl-k">-</span> <span class="pl-c1">Y</span>),</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">				b<span class="pl-k">:</span> <span class="pl-c1">200</span> <span class="pl-k">*</span> (<span class="pl-c1">Y</span> <span class="pl-k">-</span> <span class="pl-c1">Z</span>)</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">Lab2XYZ</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">Lab</span>) {</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math,</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">R</span> <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">XYZReference</span>,</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span> <span class="pl-k">=</span> (<span class="pl-smi">Lab</span>.<span class="pl-c1">L</span> <span class="pl-k">+</span> <span class="pl-c1">16</span>) <span class="pl-k">/</span> <span class="pl-c1">116</span>,</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span> <span class="pl-k">=</span> <span class="pl-smi">Lab</span>.<span class="pl-smi">a</span> <span class="pl-k">/</span> <span class="pl-c1">500</span> <span class="pl-k">+</span> <span class="pl-c1">Y</span>,</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span> <span class="pl-k">=</span> <span class="pl-c1">Y</span> <span class="pl-k">-</span> <span class="pl-smi">Lab</span>.<span class="pl-smi">b</span> <span class="pl-k">/</span> <span class="pl-c1">200</span>,</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X3</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">X</span>, <span class="pl-c1">3</span>),</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y3</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">Y</span>, <span class="pl-c1">3</span>),</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z3</span> <span class="pl-k">=</span> <span class="pl-smi">_Math</span>.<span class="pl-en">pow</span>(<span class="pl-c1">Z</span>, <span class="pl-c1">3</span>),</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">N</span> <span class="pl-k">=</span> <span class="pl-c1">16</span> <span class="pl-k">/</span> <span class="pl-c1">116</span>, <span class="pl-c1">K</span> <span class="pl-k">=</span> <span class="pl-c1">0.008856</span>, <span class="pl-c1">L</span> <span class="pl-k">=</span> <span class="pl-c1">7.787037</span>;</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">X</span><span class="pl-k">:</span> (<span class="pl-c1">X3</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-c1">X3</span> <span class="pl-k">:</span> (<span class="pl-c1">X</span> <span class="pl-k">-</span> <span class="pl-c1">N</span>) <span class="pl-k">/</span> <span class="pl-c1">L</span>) <span class="pl-k">*</span> <span class="pl-c1">R</span>.<span class="pl-c1">X</span>,</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Y</span><span class="pl-k">:</span> (<span class="pl-c1">Y3</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-c1">Y3</span> <span class="pl-k">:</span> (<span class="pl-c1">Y</span> <span class="pl-k">-</span> <span class="pl-c1">N</span>) <span class="pl-k">/</span> <span class="pl-c1">L</span>) <span class="pl-k">*</span> <span class="pl-c1">R</span>.<span class="pl-c1">Y</span>,</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">Z</span><span class="pl-k">:</span> (<span class="pl-c1">Z3</span> <span class="pl-k">&gt;</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-c1">Z3</span> <span class="pl-k">:</span> (<span class="pl-c1">Z</span> <span class="pl-k">-</span> <span class="pl-c1">N</span>) <span class="pl-k">/</span> <span class="pl-c1">L</span>) <span class="pl-k">*</span> <span class="pl-c1">R</span>.<span class="pl-c1">Z</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">rgb2Lab</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">rgb</span>, <span class="pl-smi">dependent</span>) {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-c1">XYZ</span> <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">rgb2XYZ</span>(rgb);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">XYZ2Lab</span>(dependent <span class="pl-k">?</span> <span class="pl-c1">XYZ</span> <span class="pl-k">:</span> (<span class="pl-smi">_colors</span>.<span class="pl-c1">XYZ</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>));</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">Lab2rgb</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">Lab</span>, <span class="pl-smi">dependent</span>) {</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-c1">XYZ</span> <span class="pl-k">=</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">Lab2XYZ</span>(Lab);</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ColorConverter</span>.<span class="pl-en">XYZ2rgb</span>(dependent <span class="pl-k">?</span> <span class="pl-c1">XYZ</span> <span class="pl-k">:</span> (<span class="pl-smi">_colors</span>.<span class="pl-c1">XYZ</span> <span class="pl-k">=</span> <span class="pl-c1">XYZ</span>), dependent);</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ------------------------------------------------------ //</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// ------------------ helper functions ------------------ //</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// -------------------------------------------------------//</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getClosestWebColor</span>(<span class="pl-c1">RGB</span>, <span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> out <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">			tmp <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">			half <span class="pl-k">=</span> val <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">in</span> <span class="pl-c1">RGB</span>) {</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">			tmp <span class="pl-k">=</span> <span class="pl-c1">RGB</span>[n] <span class="pl-k">%</span> val; <span class="pl-c">// 51 = &#39;web save&#39;, 17 = &#39;web smart&#39;</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">			out[n] <span class="pl-k">=</span> <span class="pl-c1">RGB</span>[n] <span class="pl-k">+</span> (tmp <span class="pl-k">&gt;</span> half <span class="pl-k">?</span> val <span class="pl-k">-</span> tmp <span class="pl-k">:</span> <span class="pl-k">-</span>tmp);</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getHueDelta</span>(<span class="pl-smi">rgb1</span>, <span class="pl-smi">rgb2</span>, <span class="pl-smi">nominal</span>) {</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> _Math <span class="pl-k">=</span> _math;</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">_Math</span>.<span class="pl-en">max</span>(<span class="pl-smi">rgb1</span>.<span class="pl-smi">r</span> <span class="pl-k">-</span> <span class="pl-smi">rgb2</span>.<span class="pl-smi">r</span>, <span class="pl-smi">rgb2</span>.<span class="pl-smi">r</span> <span class="pl-k">-</span> <span class="pl-smi">rgb1</span>.<span class="pl-smi">r</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">_Math</span>.<span class="pl-en">max</span>(<span class="pl-smi">rgb1</span>.<span class="pl-smi">g</span> <span class="pl-k">-</span> <span class="pl-smi">rgb2</span>.<span class="pl-smi">g</span>, <span class="pl-smi">rgb2</span>.<span class="pl-smi">g</span> <span class="pl-k">-</span> <span class="pl-smi">rgb1</span>.<span class="pl-smi">g</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">_Math</span>.<span class="pl-en">max</span>(<span class="pl-smi">rgb1</span>.<span class="pl-smi">b</span> <span class="pl-k">-</span> <span class="pl-smi">rgb2</span>.<span class="pl-smi">b</span>, <span class="pl-smi">rgb2</span>.<span class="pl-smi">b</span> <span class="pl-k">-</span> <span class="pl-smi">rgb1</span>.<span class="pl-smi">b</span>)) <span class="pl-k">*</span> (nominal <span class="pl-k">?</span> <span class="pl-c1">255</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>) <span class="pl-k">/</span> <span class="pl-c1">765</span>;</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getLuminance</span>(<span class="pl-smi">rgb</span>, <span class="pl-smi">normalized</span>) {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> div <span class="pl-k">=</span> normalized <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">255</span>,</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">RGB</span> <span class="pl-k">=</span> [<span class="pl-smi">rgb</span>.<span class="pl-smi">r</span> <span class="pl-k">/</span> div, <span class="pl-smi">rgb</span>.<span class="pl-smi">g</span> <span class="pl-k">/</span> div, <span class="pl-smi">rgb</span>.<span class="pl-smi">b</span> <span class="pl-k">/</span> div],</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">			luminance <span class="pl-k">=</span> <span class="pl-smi">_instance</span>.<span class="pl-c1">options</span>.<span class="pl-smi">luminance</span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">RGB</span>.<span class="pl-c1">length</span>; i<span class="pl-k">--</span>; ) {</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">RGB</span>[i] <span class="pl-k">=</span> <span class="pl-c1">RGB</span>[i] <span class="pl-k">&lt;=</span> <span class="pl-c1">0.03928</span> <span class="pl-k">?</span> <span class="pl-c1">RGB</span>[i] <span class="pl-k">/</span> <span class="pl-c1">12.92</span> <span class="pl-k">:</span> <span class="pl-smi">_math</span>.<span class="pl-en">pow</span>(((<span class="pl-c1">RGB</span>[i] <span class="pl-k">+</span> <span class="pl-c1">0.055</span>) <span class="pl-k">/</span> <span class="pl-c1">1.055</span>), <span class="pl-c1">2.4</span>);</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> ((<span class="pl-smi">luminance</span>.<span class="pl-smi">r</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>[<span class="pl-c1">0</span>]) <span class="pl-k">+</span> (<span class="pl-smi">luminance</span>.<span class="pl-smi">g</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>[<span class="pl-c1">1</span>]) <span class="pl-k">+</span> (<span class="pl-smi">luminance</span>.<span class="pl-smi">b</span> <span class="pl-k">*</span> <span class="pl-c1">RGB</span>[<span class="pl-c1">2</span>]));</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">mixColors</span>(<span class="pl-smi">topColor</span>, <span class="pl-smi">bottomColor</span>, <span class="pl-smi">topAlpha</span>, <span class="pl-smi">bottomAlpha</span>) {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> newColor <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">			alphaTop <span class="pl-k">=</span> (topAlpha <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> topAlpha <span class="pl-k">:</span> <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">			alphaBottom <span class="pl-k">=</span> (bottomAlpha <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> bottomAlpha <span class="pl-k">:</span> <span class="pl-c1">1</span>),</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">			alpha <span class="pl-k">=</span> alphaTop <span class="pl-k">+</span> alphaBottom <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> alphaTop); <span class="pl-c">// 1 - (1 - alphaTop) * (1 - alphaBottom);</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span>(<span class="pl-k">var</span> n <span class="pl-k">in</span> topColor) {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">			newColor[n] <span class="pl-k">=</span> (topColor[n] <span class="pl-k">*</span> alphaTop <span class="pl-k">+</span> bottomColor[n] <span class="pl-k">*</span> alphaBottom <span class="pl-k">*</span> (<span class="pl-c1">1</span> <span class="pl-k">-</span> alphaTop)) <span class="pl-k">/</span> alpha;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">newColor</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> alpha;</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> newColor;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getWCAG2Ratio</span>(<span class="pl-smi">lum1</span>, <span class="pl-smi">lum2</span>) {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> ratio <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (lum1 <span class="pl-k">&gt;=</span> lum2) {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">			ratio <span class="pl-k">=</span> (lum1 <span class="pl-k">+</span> <span class="pl-c1">0.05</span>) <span class="pl-k">/</span> (lum2 <span class="pl-k">+</span> <span class="pl-c1">0.05</span>);</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">			ratio <span class="pl-k">=</span> (lum2 <span class="pl-k">+</span> <span class="pl-c1">0.05</span>) <span class="pl-k">/</span> (lum1 <span class="pl-k">+</span> <span class="pl-c1">0.05</span>);</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">_math</span>.<span class="pl-en">round</span>(ratio <span class="pl-k">*</span> <span class="pl-c1">100</span>) <span class="pl-k">/</span> <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">limitValue</span>(<span class="pl-smi">value</span>, <span class="pl-smi">min</span>, <span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// return Math.max(min, Math.min(max, value)); // faster??</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (value <span class="pl-k">&gt;</span> max <span class="pl-k">?</span> max <span class="pl-k">:</span> value <span class="pl-k">&lt;</span> min <span class="pl-k">?</span> min <span class="pl-k">:</span> value);</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.28664s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-NbnFQdNBMJuTCxx5D6GyejDHxEzhDH+CQokOPYPIrb0=" src="https://assets-cdn.github.com/assets/frameworks-35b9c541d341309b930b1c790fa1b27a30c7c44ce10c7f8242890e3d83c8adbd.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-y5OKW3dnc/rK0AIqLVnsUdWRhzRjUubpW9wbNJAcUKI=" src="https://assets-cdn.github.com/assets/github-cb938a5b776773facad0022a2d59ec51d59187346352e6e95bdc1b34901c50a2.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

