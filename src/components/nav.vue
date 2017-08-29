<template>
  <div id="sidebar-wrapper">
    <nav v-bind:class="active" v-on:click.prevent>
      <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
      <a href="#" class="patient" v-on:click="makeActive('patient')">Patient</a>
      <a href="#" class="followups" v-on:click="makeActive('followups')">Follow Ups</a>
      <a href="#" class="reports" v-on:click="makeActive('reports')">Reports</a>
      <a href="#" class="sync" v-on:click="makeActive('sync')">Sync</a>
      <a href="#" class="settings" v-on:click="makeActive('settings')">Settings</a>
    </nav>
  </div>
</template>
