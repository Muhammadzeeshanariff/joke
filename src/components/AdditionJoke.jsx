const AdditionJoke = () => {
  return (
    <div>
      <ol>
        <li>
          Check for local changes with <code>git status</code>.
        </li>
        <li>
          Stage changes with <code>git add .</code>.
        </li>
        <li>
          Commit changes with <code>git commit -m "Your commit message"</code>.
        </li>
        <li>
          Pull the latest changes with <code>git pull origin master</code>.
        </li>
        <li>Resolve any merge conflicts if they occur.</li>
        <li>
          Check the status again with <code>git status</code>.
        </li>
        <li>Verify there are no uncommitted changes.</li>
        <li>Ensure your local branch is up to date.</li>
        <li>
          Push changes with <code>git push origin master</code>.
        </li>
        <li>If push fails, read the error message for details.</li>
        <li>
          Use <code>git log</code> to check commit history.
        </li>
        <li>
          Use <code>git diff</code> to see what has changed.
        </li>
        <li>
          If needed, amend the last commit with <code>git commit --amend</code>.
        </li>
        <li>
          Rebase your changes if needed with{" "}
          <code>git pull --rebase origin master</code>.
        </li>
      </ol>
    </div>
  );
};

export default AdditionJoke;
