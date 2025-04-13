"use server";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    return GetLoginScreenMetadata();
}

async function GetLoginScreenMetadata() {
    const gibworkLogoImgUrl = "https://media.gib.work/gib.jpeg";
    const bountyTokenImageUrl =
        "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032";
    //   const totalReward = "19k+";

    return new ImageResponse(
        (
            <div
                style={{
                    color: "black",
                    background: "white",
                    width: "100%",
                    height: "100%",
                    padding: "40px 80px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div tw="flex justify-between">
                    <div tw="flex">
                        <img
                            tw="mt-11"
                            src={gibworkLogoImgUrl}
                            width={65}
                            style={{ marginRight: "15px" }}
                        />
                        <h1 tw="mt-8" style={{ fontSize: 60, fontWeight: 800 }}>
                            gibwork
                        </h1>
                    </div>
                    {/* <div tw="flex mt-4">
            <img tw="mt-11 mr-5" src={bountyTokenImageUrl} width={35} />
            <h1 tw="mt-8" style={{ fontSize: 45, fontWeight: 800 }}>
              {totalReward} Rewarded
            </h1>
          </div> */}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 30,
                    }}
                >
                    <div
                        tw="flex column mt-4"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "25px",
                        }}
                    >
                        <div style={{ fontSize: "65px" }}>On-chain Work Marketplace</div>
                        <div tw="text-gray-800 text-4xl">
                            Gibwork connects skilled professionals with freelance work opportunities, offering seamless integration with all Solana tokens for secure and efficient transactions.

                        </div>  
                        <div tw="flex mt-5 justify-start">
                            <img
                                tw="ml-2 rounded-full"
                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                                width={65}
                            />
                            <img
                                tw="ml-2 rounded-full"
                                src={bountyTokenImageUrl}
                                width={65}
                            />
                            <img
                                tw="ml-2 rounded-full"
                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png"
                                width={65}
                            />
                            <img
                                tw="ml-2 rounded-full"
                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png"
                                width={65}
                            />
                            <img
                                tw="ml-2 rounded-full"
                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/29210.png"
                                width={65}
                            />
                            <img
                                tw="ml-2 rounded-full"
                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png"
                                width={65}
                            />                                                                                                                                                               
                        </div>
                        <div tw=" flex align-middle mt-4">
                              WE SUPPORT 💜 ALL SOLANA TOKENS   
                            </div> 
                        <div></div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 675,
        }
    );
}

