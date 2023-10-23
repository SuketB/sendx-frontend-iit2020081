<template>
    
<div class="flex flex-col">
    <div class="font-medium mb-3">Show the popup when visitor:</div>
    <div class="flex items-center mb-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-radio" class="ml-2 text-sm">Enters website</label>
    </div>
    <div class="flex items-center mb-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-2-radio" class="ml-2 text-sm">Exits website</label>
    </div>
    <div class="flex items-center mb-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-checked-radio" class="ml-2 text-sm mr-4">On</label>
        <input type="number" id="percentageInput" min="0" max="100" step="1" placeholder="50%" class="text-center"> page scroll
       
    </div>
     <div class="flex items-center mb-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-checked-radio" class="ml-2 text-sm mr-4">After</label>
        <input type="number" id="percentageInput" min="0" max="1000" step="1" placeholder="1" class="text-center"> seconds on website  
    </div>
    
   
    
</div>

</template>