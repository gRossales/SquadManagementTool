# Squad Management Tool

This tool guides users to create and configure soccer teams and shows statistics about current teams.

## TODO

### Phase 1

    [x] 1. Implement Page Layout.

       1.1Create placeholders for non implemented features.

    [x] 2. Implement "My teams" section.

       2.1 There is no need to implement Share action

       2.2 User must be able to sort by name and description.

    [ ] 3. Ability to Create/Edit and Remove a team.
        * IN PROGRESS: Can create teams and delete teams, edit not working yet

       3.1Team information section only.

            [x] 3.1.1 All fields but description and tags are mandatory.

            [x] 3.1.2 Default value is empty for all fields.

            [x] 3.1.3 Team website must validate site URL.

            [ ] 3.1.4 You must highlight fields/labels whenever user tries to create/update a team with invalid information.

            [x] 3.1.5    Current UI is displaying Team name as an example of an invalid field.

            [ ] 3.1.6    For tags field user must be able to enter a free text and tag will be created as soon as the user hits enter or semicolon.
              * IN PROGRESS: Tags are beeing created, but when enter is pressed some times it atempts to submit form;

    [ ] 4.Ability to see what player was the most/less picked on.

      4.1 Replace images by player initials.

### Phase 2

    [ ] 1. Ability to search for a player name and see the list of players who matched the criteria.
      * IN PROGRESS: only works in local server yet, just have to configure baseURL to match api-football url and configure its authentication header. Expects to receive data with same interface as api-football.


    [ ] 2. Ability to add a player to a field position through drag n drop.
        * IN PROGRESS: player can be drag and droped inside a position, but have some glitches. When added to team it disapears from search result.

      [x]  ·Once a player was added to the team, it should be disabled on search result list.


      [ ] ·Whenever a user is added to a position, it's initials must be displayed. i.e. Cristiano Ronaldo (CR) / Zinedine Yazid Zidane (ZZ)


    [ ]3. Save must store the team's players into application state.

### Phase 3

    [ ] 1. Implement "Top 5" section to the dashboard.

      1.1 Whenever user clicks on a given team, it should open team configuration page.

    [x] 2. Ability to configure and display a given formation from the list (Soccer field must display the positions accordingly). Options:
      3-2-2-3
      3-2-3-1
      3-4-3
      3-5-2
      4-2-3-1
      4-3-1-1
      4-3-2
      4-4-2
      4-5-1
      5-4-1

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
