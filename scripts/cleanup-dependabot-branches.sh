#!/bin/bash
# Script to delete all Dependabot branches
# Usage: ./cleanup-dependabot-branches.sh

REPO="Rouxxel/per_web_venzer"  # Replace with your repo
TOKEN="$GITHUB_TOKEN"  # Set your GitHub token

# Get all Dependabot branches
branches=$(gh api repos/$REPO/branches --jq '.[].name' | grep dependabot)

if [ -z "$branches" ]; then
    echo "No Dependabot branches found"
    exit 0
fi

echo "Found Dependabot branches:"
echo "$branches"

# Delete each branch
for branch in $branches; do
    echo "Deleting branch: $branch"
    gh api --method DELETE repos/$REPO/git/refs/heads/$branch
done

echo "Cleanup complete"
