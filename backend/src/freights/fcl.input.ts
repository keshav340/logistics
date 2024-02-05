import { InputType, Field,ObjectType,Float, Int} from '@nestjs/graphql';


@InputType()
@ObjectType()
export class  fclCity{
    @Field({nullable:true})
    name:string;
    @Field({nullable:true})
    code:string;
    @Field({nullable:true})
    countrycode:string;
    @Field({nullable:true})
    postcode:string;
    @Field(() => Float, { nullable: true })
    lat:number;
    @Field(() => Float, { nullable: true })
    long:number;
}

@InputType()
@ObjectType()
export class fclPort{
    @Field({nullable:true})
    name:string;
    @Field({nullable:true})
    code:string;
    @Field({nullable:true})
    countrycode:string;
    @Field(() => Float, { nullable: true })
    lat:number;
    @Field(() => Float, { nullable: true })
    long:number
}
@ObjectType()
@InputType()
export class fclOceanFreight{
    @Field({nullable:true})
    containerCode:string;
    @Field({nullable:true})
    containertype:string;
    @Field(()=>Int,{nullable:true})
    quantity:number;
    @Field({nullable:true})
    linerTerms:string;
    @Field({nullable:true})
    rateowner:boolean;
    

}