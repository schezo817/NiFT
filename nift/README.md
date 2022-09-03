# NiFT
NiFT is a NFT marketplace and keep contract.

## 開発環境の起動
### 環境変数
`.env.example`を参考に`.env`ファイルに環境変数を設定する
### yarn の場合
```shell
# yarn installやっていない場合は忘れずにyarn installも行う
yarn dev
```
### docker-composeの場合
```shell
# docker-compose.yamlのファイルがある場所で実行
docker compose up
```
### hardhatについて
hardhatのREADME.mdをyarnようにアレンジ
```shell
yarn run hardhat help
yarn run  hardhat test
GAS_REPORT=true yarn run  hardhat test
yarn run hardhat node
yarn run hardhat run scripts/deploy.js
```