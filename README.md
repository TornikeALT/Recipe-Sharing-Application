Project: Recipe Sharing Application Overview Create an application where users can post, view, edit, and delete recipes. This project aims to assess the understanding of Angular fundamentals, including components, services, routing, and forms.

Core Features

1.  Recipe Display: ● Create a home page that displays a list of recipes. Each recipe should show a title, short description, and a thumbnail image. ● Implement a recipe detail view that users can navigate to, displaying the full recipe, including ingredients and cooking instructions.

2.  Adding Recipes: ● Provide a form to submit new recipes. The form should include fields for the title, description, ingredients, instructions, and an option to upload a thumbnail image. ● Use Angular Reactive Forms for form handling and validation.

3.  Editing and Deleting Recipes: ● Allow users to edit or delete their recipes after posting.

4.  Search Functionality: ● Include a search bar to filter recipes by title or ingredients.

5.  Routing: ● Use Angular Router to navigate between the home page, recipe detail view, and the recipe submission form.

Technical Details

1. Components: ● Create separate components for displaying the recipe list, recipe details, and the recipe form. Use input and output decorators to manage data flow.

2. Services: ● Implement a recipe service to handle operations like fetching, adding, editing, and deleting recipes. This service will act as a central point of interaction with a mock backend.

3. Mock Backend: ● Use json-server to simulate a backend data store.

4. Navigation and Routing: ● Implement Angular’s Router to manage navigation, including a 404 Not Found page for unmatched routes.

5. Validation and Error Handling: ● Implement form validation to ensure that all fields are filled out correctly before submission. Display appropriate error messages to the user.

Bonus Feature (Optional) Favorites: ● Allow users to mark recipes as favorites and filter by their favorite recipes.

Evaluation Criteria

● Functionality: Core features should be implemented and work as described.

● Code Quality: The application’s code should be clean, well-commented, and follow Angular best practices.

● UI/UX Design: The application should have a user-friendly interface and be aesthetically pleasing. you may use any angular UI framework.

● Technical Implementation: Effective use of Angular concepts such as components, services, routing, and forms. Bonus points for implementing optional feature.

Deliverables

● Source code uploaded to a GitHub repository, with clear instructions in the README for setting up and running the application.

● A brief documentation within the README, explaining the application structure, key Angular features used, and any challenges encountered or additional features implemented.
