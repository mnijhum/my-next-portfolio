$ ssh -o StrictHostKeyChecking=no ${{ secrets.SSH_PRIVATE_KEY }} ${{secrets.SSH_IP}}
$ docker-compose pull
$ docker-compose up -d