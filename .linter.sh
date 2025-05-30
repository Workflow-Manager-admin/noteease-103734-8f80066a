#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-103734-8f80066a/noteease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

