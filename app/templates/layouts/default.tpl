<!DOCTYPE html>
<html lang="{$lang}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#121212">
    <link rel="icon" href="/favicon.ico">
    <title>{$title}</title>
    {foreach $cssFiles as $cssFile}
      <link href="/static/style/{$cssFile.href}" rel="stylesheet">
    {/foreach}
    {foreach $jsFiles as $jsFile}
      <script src="/static/scripts/{$jsFile.src}" defer></script>
    {/foreach}
  </head>
  <body>
    <header class="header">
      <a class="logo" href="/"><img src="/static/vector/renderpage-logo.svg" alt="RenderPage"></a>
      <div class="auth-panel">
        {if $isAuthorized}
          <span>{$auth.email}</span>
          <a class="btn" href="/logout">{"auth-panel.logout"}</a>
        {/if}
        {if $isAuthorized === false}
          <a class="btn" href="/signup">{"auth-panel.signup"}</a>
          <a class="btn btn-login" href="/login">{"auth-panel.login"}</a>
        {/if}
      </div>
    </header>
    <nav class="navbar">
      <a class="navbar-title" href="/">RenderPage</a>
      <button type="button">
        <span><!-- - --></span>
        <span><!-- - --></span>
        <span><!-- - --></span>
      </button>
      <ul>
        {foreach $navbar as $item}
          {if $item.isSeparator}
            <li class="divider{if $item.class} {$item.class}{/if}">
            {else}
            <li{if $item.class} class="{$item.class}"{/if}><a href="{$item.url}">{$item.text}</a>
            {/if}
          {/foreach}
      </ul>
    </nav>
    {if $breadcrumb}
      <ol class="breadcrumb">
        {foreach $breadcrumb as $item}
          <li><a href="{$item.url}">{$item.text}</a></li>
          {/foreach}
      </ol>
    {/if}
    <main class="workarea">
      {workarea}
    </main>
    {include footer.tpl}
  </body>
</html>
