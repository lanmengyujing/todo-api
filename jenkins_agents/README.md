sudo chown -R 1000:1000 jenkins_agents/jenkins_home

cd jenkins_agents

1 run ./start_jekins.sh

2 visit localhost:8080

3 cat jenkins_agents/jenkins_home/secrets/initialAdminPassword

4 enter password: 19f6683eb0294eac960b34c190e47a5c

**Create First Admin User**

- name: admin
- password: admin
