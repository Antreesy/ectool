# Code Challenge - Create a multi-select input

Goal of this challenge is to implement a reusable multi-select input component with react and tailwindcss.

![alt text](/public/screenshot_multi_select_input.png)

## Requirements

- Selected items should be displayed as dismissable badges
- Component must be styled with tailwindcss
- Selectable options should be passed as prop
- Selected items should be passed as prop (Controlled)
- Changes should be returned as event (Controlled)
- Installed npm packages should be used only
- (Optional) Input should be keyboard accessible
- (Optional) Input should be dark mode compatible

## Syntax

```jsx
<MultiSelect
  label="Colors"
  options={options}
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
></MultiSelect>
```

## Instructions
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [eckstack/code-challenge-multi-select]() repository.
2. Clone the forked repository to your local machine.
3. Install npm modules.
    ```bash
    cd code-challenge-multi-select
    npm install
    ```
4. Run the development server.
    ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. Extend the `MultiSelect` component in `/components/MultiSelect.js`.
7. Commit and push your final version to GitHub.
8. Submit your repository.