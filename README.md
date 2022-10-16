# IDEA:
Anyone can create a room we will call the room creator "host". The host will make questions it can be multiple choice, identification etc and they must provide the right answer. The host will enter a percentage as to how many questions must be answered correctly by everyone. Lets say the host entered "80%". Our app will generate a random string for the room for other users to join in. Once the host starts the quiz anyone can join with the generated string and start the quiz and display the questions one by one. If a user didn't answer 2 question kick them. After the questions, check if all users answers "80%" of the questions correctly then display a victory design else display an exploding bomb.

### Contributing Guide

1. Fork this repository.
2. Create a new branch for your changes:

```sh
$ cd your_cloned_fork
$ git checkout dev
$ git checkout -b my-new-branch
```

3. Add your mongoose connection string at `src/backend/src/index.ts.`
4. To run locally:

```sh
# Only use yarn as your package manager.
$ cd src/frontend && yarn start
$ cd ../backend && yarn start
```

5. Commit your changes and push your branch:

```sh
$ git add .
$ git commit -m "chore: some changes"
$ git push origin HEAD
```

6. Submit a pull request on the `dev` branch. (resolve conflicts if present)

## License

Licensed under the [GPL-3.0 license](https://github.com/yle11777/quizbomb/blob/main/LICENSE).
