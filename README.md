## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

### One Adventure One Life Plan

## State
    - age
    - family health
    - name
    - quests completed

## Sign Up Page
    - Radio buttons to select race
    - Name your family
    - Button to submit and start adventure
        - On Submit, put name and race into local storage

## Map Page
    - Div for map with background image
    - On Load:
        - If user is dead, go to results page
        - Check if quests are completed
        - If quests are completed, then disable them
        - Render available quests as links with id in the query params

## Quest Page
    - Div to put our quest options into
    - On load, 
        - get the quest that matches the query param
        - use the matching object to render data
    - on submit, 
        - get selected choice
        - update state with new values based on choice
        - redirect user to map page

## Results Page
    - Div to put our adventure results data
    - on load, show results based on current state

## Backlog 
    - 
